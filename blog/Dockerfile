FROM rust:latest as builder

# Build + install deps
WORKDIR /usr/src/blog
RUN rustup default nightly
COPY . .
RUN cargo install --path .

# Run migrations
RUN cargo install diesel_cli --no-default-features --features "postgres"
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*
ENTRYPOINT ["docker-entrypoint.sh"]

# Run app
CMD ["blog"]
