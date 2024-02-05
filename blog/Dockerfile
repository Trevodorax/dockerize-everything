# === Build
FROM rust:latest as builder
WORKDIR /usr/src/blog
# rocket requires nightly
RUN rustup default nightly
COPY . .
RUN cargo install --path .

RUN cargo install diesel_cli --no-default-features --features "postgres"
# this should be done only on runtime
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["blog"]
