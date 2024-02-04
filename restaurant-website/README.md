# *Dockerize Everything!* - Application : Grilli

## Objectif

Conteneuriser l'application Grilli pour qu'elle s'exécute en mode production à l'aide de Docker.

## Architecture

L'application web Grilli est le site web du restaurant éponyme. Les gourmets peuvent voir le menu, localiser le
restaurant via son adresse et réserver une table.

> Note : le site est statique, donc aucun formulaire ne fonctionne. Ceci est normal.

L'application est basée sur le framework [Symfony](https://symfony.com/doc/current/index.html).

Vous êtes invités à lire la suite de ce README afin de savoir comment construire l'application en mode production.

## Fichiers à compléter

- `docker-compose.yaml` : Fichier permettant d'orchestrer l'application via Docker Compose ;
- `Dockerfile` : Dockerfile permettant de construire l'image de l'application Grilli en mode production ;

> Bon courage !

## Prérequis

- PHP 8.3 avec les extensions suivantes :
    - `intl`
- [Composer](https://getcomposer.org/download/)
- [Symfony CLI](https://symfony.com/download).

### Production uniquement

- Nginx
- PHP-FPM

## Variables d'environnement

Aucune

## Ports

| Environnement | Valeur |
|---------------|--------|
| Développement | 8000   |
| Production    | 80     |

## Fonctionnalités

- Afficher le site web du restaurant Grilli (site statique).

## Développement

Installer [Symfony CLI](https://symfony.com/download) (NE PAS INSTALLER EN PRODUCTION !).

Installer les dépendances avec `composer install`, puis démarrer le serveur de développement :

```bash
symfony server:start
```

## Production

Pour créer une version de production de l'application :

### Mise en place du serveur Web

- Installer PHP-FPM si ce n'est pas déjà fait ;
- Installer nginx ;
- Configurer nginx pour qu'il puisse exécuter PHP-FPM afin d'accéder à `public/index.php` de Symfony
  ([exemple de configuration](.docker/nginx/grilli.com.conf)).

### Déploiement de Symfony

Définir la variable d'environnement `APP_ENV` à `prod`.

Installer les dépendances via Composer :

```bash
composer install --no-dev --optimize-autoloader
```

> Attention : pour exécuter les commandes suivantes, il faut que l'utilisateur `www-data` puisse lire les fichiers
> produits.
> Vous devez exécuter les commandes suivantes en tant que `www-data`, ou bien changer les droits d'accès des dossiers
> concernés a posteriori.

Compiler le JS et le CSS :

```bash
php bin/console asset-map:compile
```

Enfin, nettoyer le cache :

```bash
php bin/console cache:clear --env=prod
```

Le site est maintenant accessible sur le nom de domaine configuré via Nginx.
