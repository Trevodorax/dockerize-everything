#!/bin/bash
# wait for the database to be ready
until PGPASSWORD=meau-de-pace psql -h "db" -U "paul" -d "blog" -c '\q' 2>/dev/null; do
  >&2 echo "Database is unavailable - sleeping"
  sleep 1
done

>&2 echo "Database is up - executing command"
# run diesel migrations
diesel migration run

# start the application
exec "$@"