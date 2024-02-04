# *Dockerize Everything!* - Application : The Computer Club's Blog

## Objectif

Conteneuriser l'application The Computer Club's Blog pour qu'elle s'exécute en mode production à l'aide de Docker.

## Architecture

L'application web The Computer Club's Blog est le blog d'une association de développeurs passionnés. Les lecteurs
peuvent lister les articles publiés par l'association, et lire un article.

Les développeurs ont ajouté un easter egg : un endpoint API permettant de créer ses propres articles afin de publier
ce que vous souhaitez. Il ne vous reste plus qu'à le trouver !

L'application est basée sur le framework [Rocket](https://rocket.rs/).

Vous êtes invités à lire la suite de ce README afin de savoir comment construire l'application en mode production.

## Fichiers à compléter

- `docker-compose.yaml` : Fichier permettant d'orchestrer l'application via Docker Compose ;
- `Dockerfile` : Dockerfile permettant de construire l'image de l'application The Computer Club's Blog en mode
  production ;

> Bon courage !

## Prérequis

- Paquets système :
    - `libpq-dev` (Debian et Alpine Linux)
- Rust (*nightly* build **obligatoire !**) en dernière version (1.77.0)
- PostgreSQL 16+

## Variables d'environnement

| Nom            | Description                                                           | Obligatoire ? | Exemple                              |
|----------------|-----------------------------------------------------------------------|---------------|--------------------------------------|
| DATABASE_URL   | La chaîne de connexion à la base de données PostgreSQL.               | Oui           | postgres://thomas:admin@db:5432/blog |
| ROCKET_ADDRESS | L'adresse IP sur laquelle écoute le serveur (`127.0.0.1` par défaut). | Oui           | `0.0.0.0`                            |

## Ports

| Environnement | Valeur par défaut |
|---------------|-------------------|
| Développement | 8000              |
| Production    | 8000              |

## Fonctionnalités

- Afficher tous les articles du blog.
- Afficher un article du blog.
- (Secret !) Créer un article de blog.

## Développement

Installer la CLI de `diesel` en utilisant la commande suivante :

```bash
cargo install diesel_cli --no-default-features --features postgres
```

Puis exécuter `diesel migration run` pour initialiser la base de données.

Enfin, lancer `cargo run` pour lancer l'application en mode développement.

## Production

Pour créer une version de production de l'application :

### Compilation de l'application

Compiler l'application en utilisant la commande suivante :

```bash
cargo install --path .
```

Copier le binaire nouvellement créé dans votre dossier courant :

```bash
cp /usr/local/cargo/bin/blog ./blog
```

### Exécution des migrations

Installer la CLI de `diesel` en utilisant la commande suivante :

```bash
cargo install diesel_cli --no-default-features --features postgres
```

Puis exécuter `diesel migration run` pour initialiser la base de données.

### Lancer l'application

Enfin, lancer l'application avec la commande suivante :

```bash
./blog
```

Le site est maintenant accessible sur http://localhost:8000.

### Notes

- Veillez à ce que les dossiers suivants soient situés dans le même dossier que le binaire `blog` :
    - `migrations`
    - `static`
    - `templates`
- Assurez-vous d'avoir la base de données démarrée avant l'exécution des migrations.
- Penser à exécuter les migrations avant de démarrer l'application.
