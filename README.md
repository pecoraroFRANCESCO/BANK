# Node.JS: BeCode TrouvKach

> A simple react/node app, locating the ATMs nearby.

* * *

## Introduction

Ce projet est une alternative au project **mastermind** : pas forcément *plus simple*, il se concentre sur la réalisation d'une seconde webapp, semblable à l'application **bookshelf**, avec quelques petites différences qui ajouteront quelques nouveautés de moindre importance.

Un projet idéal pour vous assurer de votre bonne compréhension de React/Node.

## Cahier des charges

Notre cahier des charges va être relativement simple : nous voulons une application web qui va récupérer la position géographique de l'utilisateur et va lui lister les distributeurs de billets les plus proches.

L'utilisateur aura la possibilité d'afficher les détails de chaque distributeur, ainsi qu'éventuellement le marquer comme vide, éditer ses informations ou le marquer pour suppression.

### Structure des données

Les données existent déjà et nous sont mises à disposition sous forme de deux *dump* MongoDB qui se trouvent dans le dossier [_dev](./_dev).

> ☝️ **NOTE:** je vous laisse chercher comment importer les données de ce *dump* dans la votre base de données. *MongoExpress* étant un peu buggé, je l'ai retiré du `docker-compose`. Je vous invite à regarder du côté de [MongoDB Compass](https://www.mongodb.com/products/compass) ou [Robo 3T (anciennement RoboMongo)](https://robomongo.org).

Nous avons deux types de données : les **banques** et les **terminaux**.

#### Terminaux

Un terminal représente un ou plusieurs distributeurs de billets disponible à un endroit géographique donné.  
Chaque terminal est caractérisé par les informations suivantes : 

* un **id** (`_id`, `ObjectID`)
* une **latitude** (`latitude`, `Number`)
* une **longitude** (`longitude`, `Number`)
* une **adresse** (`address`, `String`, facultative)
* une **banque** (`bank`, `ObjectID`, facultative)
* une **état** de remplissage (`empty`, `Boolean`, facultatif)
* une **date de création** (`created_at`, `String`)
* une **date de mise à jour** (`updated_at`, `String`) 
* une **date de suppression** (`deleted_at`, `String`, facultative)

#### Banque

Une banque représente une entité légale "propriétaire" d'un terminal.  
Chaque banque est caractérisée par : 

* un **id** (`_id`, `ObjectID`)
* un **nom** (`name`, `String`)
* un **pays** (`country`, `String`)
* une **couleur** (`color`, `String`)
* une **icône** (`icon`, `String`)
* une **URL** (`url`, `String`)
* une **date de création** (`created_at`, `String`)
* une **date de mise à jour** (`updated_at`, `String`) 
* une **date de suppression** (`deleted_at`, `String`, facultative)

### Contraintes techniques

Vous êtes libres au niveau design et, en fonction, de l'ajout de fonctionnalités supplémentaires (pour peu que celles exprimées ci-avant soient respectées).

Seul réel impératif : vous devez indiquer la distance qui sépare l'utilisateur de chaque distributeur affiché.

##### Carte dynamique ou non ?

Vous êtes libres d'intégrer une carte interactive à votre client.  
Utilisez Google Maps ou OpenStreetMaps, comme bon vous semble.

> ☝️ **NOTE :** l'ajout d'une carte intéractive peut être relativement complexe (mais formateur). Assurez-vous que tout le reste soit ok pour vous pencher dessus.

#### Mockups & Design

Nous ne vous avons pas prévu de design pour ce projet, ni même de mockups.

Après avoir pris connaissance de cet énoncé, la première étape de votre travail de groupe devrait être la conception de vos mockups.

> 👋 **HEY!** n'hésitez pas à nous soumettre vos mockups, c'est le meilleur moyen de vous assurer que vous avez bien compris l'énoncé.

Concernant le design, je vous laisse carte blanche.

#### Stack technique

Vous avez par contre une **stack technique** à respecter.

##### Back-end

Une API REST utilisant :

- **Node.js**
- **MongoDB**

##### Front-end

Une `Single Page App` utilisant :

- **React**

#### Toolchain / Dev Env

Le projet est donc divisé en deux parties, le back-end et le front-end.

À l'instar du projet Bookshelf, nous vous avons préparé un environnement de développement tout fait et qui pourra vous servir de base pour la suite.

##### Environnement

Le projet vous est fourni avec un fichier `docker-compose.yml` et sa documentation en markdown, le document [`docker-readme.md`](./docker-readme.md).

Tout le code du projet sera placé dans le dossier `src`. Des outils sont configurés pour *compiler* ces fichiers vers le dossier `bin`.  

> ⚠️ **ATTENTION :** ne modifiez **jamais** le contenu du dossier bin ! Il risque d'être remplacé lors de votre prochaine compilation !

##### Back-end

Pour la partie back-end, votre code est compilé avec [BabelJS](https://babeljs.io). Le code de la partie back-end se trouve dans `src/server`.

Nous vous avons préparé un tout petit bout de code fonctionnel, qui configure un serveur **express**, une route `GET /hello` et le *middleware* **static** pour afficher les fichiers du client.

Vous êtes libres de garder cette base ou de la réécrire pour votre projet.
 
###### Compilation

Pour compiler votre code back-end, deux commandes sont possibles :

- `npm run build:server` (compile votre code)
- `npm run work:server` (compile puis observe vos fichiers pour les recompiler en cas de changements)

##### Front-end

Pour la partie front-end, votre code est compilé/packagé avec [Webpack](https://webpack.js.org/). Le code de la partie front-end se trouve dans `src/client`.

> ☝️ **NOTE :** webpack est un outil extrêmement puissant mais qui peut aussi très vite être *complexe*. Il n'est pas forcément dit que nous aurons l'occasion de le découvrir en détail.  
> Il existe énormément de bonnes ressources à ce sujet, qui peut même être l'objet d'un passionant workshop pour les pâturages.

Nous vous avons préparé un tout petit bout de code fonctionnel, qui affiche un composant React contenant le texte "*Hello, World*".
 
###### Compilation

Pour compiler votre code front-end, deux commandes sont possibles :

- `npm run build:client` (compile votre code)
- `npm run work:client` (compile puis observe vos fichiers pour les recompiler en cas de changements)

##### Prettier & ESLint

Le projet est configuré pour utiliser [Prettier](https://prettier.io) & [ESLint](https://eslint.org).

###### Compilation

Pour vérifier vos fichiers avec ESLint & Prettier, vous pouvez également lancer la commande `npm run lint`.

###### Hooks git

Le projet a également été configuré avec un *hook* de **precommit** pour git : lorsque vous commitez vos fichiers, ESLint & Prettier sont exécutés et, en cas d'erreur, le commit est annulé, pour vous permettre de corriger les erreurs.  
Ainsi, vous avez la certitude que vous commitez des fichiers exempts de problèmes potentiels.

#### Déploiement

Nous attendons un projet **fonctionnel** et *déployé*.  
Une des solutions parmi les plus simples est d'utiliser [**Heroku**](https://www.heroku.com). Pour l'hébergement de votre base de données, Heroku fonctionne nativement avec [**mLab**](https://mlab.com) (anciennement *MongoLab*).

> 🤞**NOTE:** il est possible, comme pour le projet Laravel, que Heroku ne vous permette pas d'activer le service mLab directement depuis son interface. Vous devrez alors passer *directement* par le site de mLab.

* * *

## Deadline & modalités

Le projet doit être accessible en ligne le **lundi 4 mars à 16h59**.  
Nous attendons un mail de chaque groupe avec un lien vers le repository et un lien vers le site en production.

Bon travail.
