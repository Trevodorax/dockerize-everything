# === Build
FROM rust:latest as builder
WORKDIR /usr/src/blog
COPY . .
RUN cargo install --path .
CMD ["blog"]
