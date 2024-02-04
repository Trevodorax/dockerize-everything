# *Dockerize Everything!* - Application : Make Me Watch

## Objectif

Conteneuriser l'application Make Me Watch pour qu'elle s'exécute en mode production à l'aide de Docker.

## Architecture

L'application web Make Me Watch permet d'afficher un catalogue des 250 meilleures séries TV
(selon [le classement TV Maze](https://tvmaze.com)). Il est possible d'afficher les détails
d'une série TV en cliquant sur son poster.

L'application est composée :

- d'une single-page application ("client") basée sur le framework
  frontend [SvelteKit](https://kit.svelte.dev/docs/introduction) ;
- d'une API ("serveur") basée sur le framework backend [NestJS](https://docs.nestjs.com).

Vous êtes invités à lire le README du [client](./client/README.md) et du [serveur](./server/README.md) afin de savoir
comment construire les différentes applications en mode production.

## Fichiers à compléter

- `docker-compose.yaml` : Fichier permettant d'orchestrer le client et le serveur via Docker Compose ;
- `client/Dockerfile` : Dockerfile permettant de construire l'image du client Make Me Watch en mode production ;
- `server/Dockerfile` : Dockerfile permettant de construire l'image du serveur Make Me Watch en mode production.

> Bon courage !
