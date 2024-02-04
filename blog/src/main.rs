extern crate rocket;
use rocket::{launch, routes};
use rocket::fs::{FileServer, relative};
use rocket_dyn_templates::{ Template };
mod services;
pub mod  models;
pub mod  schema;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![services::create_post])
        .mount("/", routes![services::get_post])
        .mount("/", routes![services::list_posts])
        .mount("/public", FileServer::from(relative!("static")))
        .attach(Template::fairing())
}
