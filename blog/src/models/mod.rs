// models/mod.rs
use std::time::SystemTime;
use super::schema::posts;
use diesel::prelude::*;
use serde::{Serialize, Deserialize};

#[derive(Queryable, Insertable, Selectable, Serialize, Deserialize)]
#[diesel(table_name = posts)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub summary: String,
    pub body: String,
    pub published: bool,
    pub published_at: SystemTime,
}

#[derive(Insertable, Serialize, Deserialize)]
#[diesel(table_name = posts)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct NewPost {
    pub title: String,
    pub summary: String,
    pub body: String,
    pub published: bool,
}
