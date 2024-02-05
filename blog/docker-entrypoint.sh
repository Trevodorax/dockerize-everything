#!/bin/bash
# run diesel migrations
# TODO: wait for database to be ready before applying migrations
diesel migration run
# start the application
exec "$@"