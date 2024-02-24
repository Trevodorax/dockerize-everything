FROM rustlang/rust:nightly as builder

WORKDIR /usr/src/blog

# ===== INSTALL DEPENDENCIES BEFORE LOADING CODE DIFFS ===== #
# Necessary for build
RUN apt-get install libpq-dev libsqlite3-dev libmariadb-dev-compat libmariadb-dev
# Copy deps files
COPY Cargo.toml Cargo.lock* ./
# Fake main.rs to install deps without depending on changes in the source code
RUN mkdir src/ && echo "fn main() {}" > src/main.rs
# Install dependencies early 
RUN cargo build --release

# ===== BUILD BLOG ===== #
# Get project files (dockerignore is set for useless stuff)
COPY . .
# Modify timestamp to rebuild (without dependencies)
RUN touch src/main.rs
# Build
RUN cargo build --release --bin blog

# =====  BUILD DIESEL CLI ===== #
RUN cargo install diesel_cli --no-default-features --features "postgres,mysql,sqlite"




FROM rustlang/rust:nightly-slim as runner

WORKDIR /usr/src/app

# ===== GET RUNTIME DEPENDENCIES ===== #
RUN apt-get update && apt-get install -y postgresql-client libmariadb-dev-compat libmariadb-dev sqlite3

# ===== GET FILES REQUIRED AT RUNTIME ===== #
COPY ./migrations ./migrations
COPY ./templates ./templates
COPY ./static /usr/src/blog/static

# ===== RETRIEVE BUILT SOURCES AND DIESEL_CLI ===== #
COPY --from=builder /usr/src/blog/target/release/blog ./blog
RUN chmod +x ./blog
COPY --from=builder /usr/local/cargo/bin/diesel /usr/local/bin/diesel
RUN chmod +x /usr/local/bin/diesel

# ===== PREPARE MIGRATIONS ===== #
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# ===== RUN MIGRATIONS AND APP ===== #
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["./blog"]
