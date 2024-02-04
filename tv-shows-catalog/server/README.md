# Make Me Watch : catalogue de séries TV

Application serveur (backend) affichant un catalogue de séries TV.

## Prérequis

Node.js LTS

## Variables d'environnement

Aucune

## Ports

| Environnement | Valeur |
|---------------|--------|
| Développement | 3000   |
| Production    | 3000   |

## Fonctionnalités

- Récupérer la [liste des séries](http://localhost:3000/tv-shows) ;
- Récupérer la fiche d'une série (Exemple : [Rick et Morty](http://localhost:3000/tv-shows/216)).

## Développement

Installer les dépendances avec `npm install`, puis démarrer le serveur de développement :

```bash
npm run start:dev
```

## Production

Pour créer une version de production de l'application :

```bash
npm run build
```

Il est possible de prévisualiser la version de production avec `npm run start:prod`.

> Note : Pour démarrer le serveur en production, il faut lancer la commande `node dist/main.js`
