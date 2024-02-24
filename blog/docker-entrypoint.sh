#!/bin/bash

# Run migrations
>&2 echo "Running migrations"
diesel migration run

# Start the application
exec "$@"
