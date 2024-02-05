#!/bin/bash
# run diesel migrations
diesel migration run --database-url postgres://thomas:admin@db:5432/blog
# start the application
exec "$@"