# Outils : create-react-app

Nous allons utiliser maintenant **create-react-app** qui nous permettra d'avoir un squelette d'application et un environnement de développement.

Ce module JS de développement utilise badel et webpack. Vous n'avez pas à priori à vous soucier des configurations de ces deux derniers packages.

Voici la documentation officielle de [create-react-app](https://create-react-app.dev/)

## Pré-requis et présentation

Node et npm doivent être installés sur votre machine. Vérifiez que les versions de ces deux modules sont tels que : node >= 8.10 et npm >= 5.6

Rappelons que npm est un **package manager** qui est là pour nous aider à installer nos dépendances pour nos projets JS.

Notez que npm n'exécute pas de commande. Pour exécuter une commande avec npm, vous devez spécifier le chemin vers l'exécutable, qui se trouve normalement dans le dossier node_modules/.bin de votre projet, dans le fichier package.json et dans la partie "scripts" de ce fichier :

```json
"scripts": {
    "build": "react-scripts build",
  },

```
A la racine de votre projet en ligne de commande vous taperez la commande suivante :

```bash
npm run build
```

### Méthode 1 npx

- Vous pouvez utiliser la commande **npx** de npm. elle est inclue à partir npm5.2 dans npm, elle vous permettra, par exemple, de tester des exécutables sans les installer.

Fonctionnement de npx lorsque vous tapez la ligne de commande suivante :

```bash
npx <executable>
```

- Si votre exécutable existe dans vos **node_modules** localement npx l'exécute.

- Sinon, npx regarde si l'exécutable existe de manière globale (dans vos node_modules globaux), si c'est le cas elle l'exécute.

- Si l'exécutable n'existe pas ni localement, ni globalement, alors il l'installe **de manière temporaire** puis l'exécute dans votre projet.


```bash
npx create-react-app my-app

cd my-app
npm start
```

### Méthode 2 npm

Vous pouvez installer **create-react-app** de manière globale ou local :

```bash
npm install create-react-app --global
```

*Remarque si vous avez à le mettre à jour tapez la ligne de commande suivante :*

```bash
npm install react-scripts@latest
```

Puis, pour installer un squelette d'application avec CRA en ligne de commande vous taperez :

```bash
npm init react-app my-app
```

## Résumé des commandes dans notre structue applicatif CRA

Une fois votre projet installé à l'aide de la CRA vous aurez les commandes npm suivantes à votre disposition (voir le fichier package.json clé scripts) :

```bash
# démarre le serveur de production
npm start

# build les sources dossier build
npm run build

# build en supprimant toutes les dépendances inutiles
# Attention pas de retour en arrière possible...
npm run eject
```

## Structure CRA

Voici la structure d'un projet type create-react-app :

```txt
denomination
    |-- README.md
    |-- node_modules    <-- dépendances
    |-- package.json
    |-- .gitignore
    |-- public
    |   |-- favicon.ico
    |   |-- index.html    <-- Point d'entrée
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |-- src
        |-- App.css
        |-- App.js      <-- composant racine
        |-- App.test.js
        |-- index.css
        |-- index.js    <-- bootstrap
        |-- logo.svg
        |-- serviceWorker.js
```

## Exercice Denomination

Création du projet denomination.

Vous créerez deux composants **App** & **Denomination**. Faites l'algorithmique et l'affichage dans le composant Denomination :

```text
   App
    .
    .
Denomination
```

Choisissez une des deux manières d'installer votre projet CRA détaillées plus haut :

1. Avec npm directement (installation globale de CRA)

```bash
# à partir de la version 6 et +
npm init react-app denomination
cd denomination

# démarrer le serveur
npm start
```

2. Avec npx
```bash
# à partir de la version 6 et +
npx react-app denomination
cd denomination

# démarrer le serveur
npm start
```

### Détails des fonctionnalités

Vous allez créer une petite application permettant de rendre la monnaie d'un montant donné. 

La monnaie rendue sera basée sur des tokens (monnaies) déterminés. 

Vous rendez toujours les tokens les plus élévés pour un montant donné. Voyez l'exemple ci-après.

Liste des tokens pour l'exercice :

```js
// tokens
const denominations = [1, 5, 10, 20, 50, 100, 200] ;
```

### Exemple

Soit le montant saisi de 233, vous affichez alors les tokens suivants :

```txt
    token 200 : 1
    token 20  : 1
    token 10  : 1
    token 1   : 3
```

Un montant saisi ne pourra pas être inférieur strictement à 1 ou avec une partie décimale non nulle (gestion des erreurs à faire à la fin).

### Wireframe 1

```txt

Les tokens : 1, 5, 10, 20, 50, 100, 200 <-- Affichez la liste des tokens

saisir le montant [ 233 ]  <-- montant saisi

[ generate token(s) ]

```

### Wireframe token(s) rendu(s) 2

```txt

Les tokens : 1, 5, 10, 20, 50, 100, 200 <-- Affichez la liste des tokens

saisir le montant [ ]  <-- montant saisi

[ generate token(s) ]

Vous avez demandé la monnaie sur 233 :

token 200 : 1

token 20 : 1

token 10 : 1

tokens  1 : 3
```

Lorsque vous aurez terminé la partie algorithmique permettant de rendre la monnaie gérez les erreurs de saisies dans le formulaire.

## Dénomination v2

Refaire l'exercice précédent, maintenant les tokens sont en quantités limitées. Vous utiliserez un Map en JS pour stocker ces quantités/token. 

Pour chaque moutant demandé les quantités diminuent.

```txt
token  quantity
1,  --> 10
5,  --> 10
10, --> 10
20, --> 10
50, --> 10
100 --> 10
200 --> 10

```
