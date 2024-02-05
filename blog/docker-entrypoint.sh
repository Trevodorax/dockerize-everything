#!/bin/bash
# run diesel migrations
diesel migration run
# start the application
exec "$@"