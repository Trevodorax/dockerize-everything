extern crate diesel;
extern crate rocket;
use diesel::pg::PgConnection;
use diesel::prelude::*;
use dotenvy::dotenv;
use rocket::response::{status::Created, Debug};
use rocket::serde::{json::Json};
use rocket::{get, post };
use crate::models;
use crate::schema;
use rocket_dyn_templates::{context, Template};
use std::env;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

type Result<T, E = Debug<diesel::result::Error>> = std::result::Result<T, E>;

#[get("/")]
pub fn list_posts() -> Template {
    use self::models::Post;
    use self::schema::posts::dsl::posts;
    use self::schema::posts::published;

    let connection = &mut establish_connection();

    let results = posts
        .filter(published.eq(true))
        .load::<Post>(connection)
        .expect("Error loading posts");

    Template::render("posts", context! {title: "All posts", posts: &results, count: results.len()})
}

#[get("/posts/<id>")]
pub fn get_post(id: i32) -> Template {
    use self::models::Post;
    use self::schema::posts::dsl::posts;
    use self::schema::posts::published;

    let connection = &mut establish_connection();

    let post = posts
        .filter(published.eq(true))
        .find(id)
        .select(Post::as_select())
        .first(connection)
        .expect("Error loading post");

    Template::render("post", context! {title: &post.title, post: &post})
}

#[post("/posts", format = "json", data = "<post>")]
pub fn create_post(post: Json<models::NewPost>) -> Result<Created<Json<models::Post>>> {
    use self::schema::posts::dsl::*;
    use self::models::{NewPost,Post};

    let connection = &mut establish_connection();

    let new_post = NewPost {
        title: post.title.to_string(),
        body: post.body.to_string(),
        summary: post.summary.to_string(),
        published: post.published,
    };

    let inserted_post = diesel::insert_into(posts)
        .values(&new_post)
        .returning(Post::as_returning())
        .get_result(connection)
        .expect("Error saving new post");

    Ok(Created::new("/").body(Json(inserted_post)))
}
