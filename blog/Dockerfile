# Switch to a rust nightly image
FROM rustlang/rust:nightly-slim as builder

WORKDIR /usr/src/blog

# ===== INSTALL DEPENDENCIES BEFORE LOADING CODE DIFFS ===== #
# Necessary for build
RUN apt-get update && apt-get install -y libpq-dev
# Copy deps files
COPY Cargo.toml Cargo.lock* ./
# Fake main.rs to install deps without depending on changes in the source code
RUN mkdir src/ && echo "fn main( ) {}" > src/main.rs
# Install dependencies early 
RUN cargo build --release

# ===== BUILD BLOG ===== #
# Get project files (dockerignore is set for useless stuff)
COPY . .
# Modify timestamp to rebuild
RUN touch src/main.rs
# Build
RUN cargo build --release --bin blog

# =====  BUILD DIESEL CLI ===== #
# create a dummy project to compile diesel_cli
RUN apt-get install -y libsqlite3-dev libmariadb-dev-compat libmariadb-dev
RUN cargo install diesel_cli --no-default-features --features "postgres,mysql,sqlite"
# COPY ./migrations /usr/src/diesel_cli

# Prepare migrations
# RUN cargo install diesel_cli --no-default-features --features "postgres"
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Run migrations
ENTRYPOINT ["docker-entrypoint.sh"]

# Run app
CMD ["target/release/blog"]

# do a multistage with a lightweight vanilla linux
# WILL HAVE TO COPY THE DIESEL CLI BINARY AND THE APP BINARY TO DO SO AND RUN MIGRATIONS
