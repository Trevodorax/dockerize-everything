FROM php:8.3-fpm

# Install the required system dependencies for PHP extensions and necessary tools
RUN apt-get update && apt-get install -y \
        libicu-dev \
        libzip-dev \
        unzip \
        git \
        sudo \
        nginx \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install intl zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Define environment variable for Symfony
ENV APP_ENV=prod

# Set the working directory
WORKDIR /var/www/html

# Copy the source code to the working directory
COPY . /var/www/html

# Install dependencies with Composer
RUN composer install --no-dev --optimize-autoloader --working-dir=/var/www/html

# Change the owner of the working directory
RUN chown -R www-data:www-data /var/www/html

# Change the default user of the PHP-FPM process
USER www-data

# Compile the assets
RUN php bin/console asset-map:compile --env=prod --no-debug

# Clear the cache
RUN php bin/console cache:clear --env=prod --no-debug