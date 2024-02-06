# Créer un Dockerfile pour cette application en mode production
# Utiliser l'image officielle de PHP avec FPM
FROM php:8.3-fpm

# Installer les dépendances système requises pour les extensions PHP et les outils nécessaires
RUN apt-get update && apt-get install -y \
        libicu-dev \
        libzip-dev \
        unzip \
        git \
        sudo \
        nginx \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install intl zip

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Définir la variable d'environnement pour Symfony
ENV APP_ENV=prod

# Copier le code source de l'application dans le conteneur
COPY . /var/www/html

# Installer les dépendances avec Composer
RUN composer install --no-dev --optimize-autoloader --working-dir=/var/www/html

# Donner la propriété à www-data
RUN chown -R www-data:www-data /var/www/html

# Changer l'utilisateur par défaut de PHP-FPM
USER www-data

# Compiler les assets (si nécessaire)
RUN php bin/console asset-map:compile --env=prod --no-debug

# Nettoyer le cache
RUN php bin/console cache:clear --env=prod --no-debug