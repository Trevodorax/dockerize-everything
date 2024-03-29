FROM php:8.3-fpm-alpine

# Install the required system dependencies for PHP extensions and necessary tools
RUN apk update && apk add \
    icu-dev \
    libzip-dev \
    unzip \
    git \
    sudo \
    nginx \
&& rm -rf /var/cache/apk/* \
&& docker-php-ext-install intl zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy the source code to the working directory
# .dockerignore then COPY . .
COPY . .

# Change the owner of the working directory
RUN chown -R www-data:www-data /var/www/html

# Change the default user of the PHP-FPM process
USER www-data

# Install dependencies with Composer
RUN composer install --no-dev --optimize-autoloader --working-dir=/var/www/html

# Compile the assets
RUN php bin/console asset-map:compile --env=prod --no-debug

# Clear the cache
RUN php bin/console cache:clear --env=prod --no-debug