// @generated automatically by Diesel CLI.

diesel::table! {
    posts (id) {
        id -> Int4,
        #[max_length = 300]
        title -> Varchar,
        #[max_length = 500]
        summary -> Varchar,
        body -> Text,
        published -> Bool,
        published_at -> Timestamp,
    }
}
