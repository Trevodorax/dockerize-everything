FROM rust:latest as builder
# use rust nightly unofficial image instead (nightly slim)

# Build + install deps
WORKDIR /usr/src/blog
RUN rustup default nightly
COPY . .
# TODO: do the package install first at the top to have cache
RUN cargo install --path .

# Prepare migrations
RUN cargo install diesel_cli --no-default-features --features "postgres"
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Run migrations
ENTRYPOINT ["docker-entrypoint.sh"]

# Run app
CMD ["blog"]

# do a multistage with a lightweight vanilla linux
# WILL HAVE TO COPY THE DIESEL CLI BINARY AND THE APP BINARY TO DO SO AND RUN MIGRATIONS
