#!/bin/bash
# Wait for the database to be ready
until PGPASSWORD=$POSTGRES_PASSWORD psql -h "db" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q' 2>/dev/null; do
  >&2 echo "Waiting for db..."
  sleep 1
done

# Run migrations
>&2 echo "Running migrations"
/usr/local/cargo/bin/diesel migration run

# Start the application
exec "$@"
