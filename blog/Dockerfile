# === Build
FROM rust:latest as builder
WORKDIR /usr/src/blog
# rocket requires nightly
RUN rustup default nightly
COPY . .
RUN cargo install --path .
CMD ["blog"]
