# Make Me Watch : catalogue de séries TV

Application cliente (SPA) affichant un catalogue de séries TV.

## Fonctionnalités

- Afficher la [liste des séries](http://localhost:5173) ;
- Voir le détail d'une série (Exemple : [Rick et Morty](http://localhost:5173/tv-shows/216/rick-and-morty)).

## Prérequis

- Node.js LTS ;
- (Production uniquement) Un serveur Web (Nginx recommandé, Apache possible).

## Variables d'environnement

| Nom                 | Description                                     | Obligatoire ? | Exemple               |
|---------------------|-------------------------------------------------|---------------|-----------------------|
| API_BASE_URL        | L'URL de base de l'API Make Me Watch (serveur). | Oui           | http://localhost:3000 |

## Ports

| Environnement            | Valeur par défaut |
|--------------------------|-------------------|
| Développement            | 5173              |
| Pré-production (preview) | 4173              |
| Production               | 3000              |

## Développement

Copier le fichier `.env.example` vers `.env` et renseigner les variables selon votre environnement.

Installer les dépendances avec `npm install`, puis démarrer le serveur de développement :

```bash
npm run dev

# démarrer le serveur de développement et ouvrir le navigateur web
npm run dev -- --open
```

## Production

Copier le fichier `.env.example` vers `.env` et renseigner les variables selon votre environnement.

Pour créer une version de production de l'application :

```bash
npm run build
```

Il est possible de prévisualiser la version de production avec `npm run preview`.
