# React Introduction

## React définition

React est une librairie JS développée par Facebook, utilisée pour créer des Components (rendu dans le DOM par exemple) réutilisables. React est donc orienté "vue".

L'approche de React est donc de type Component. Il encapsule les propriétés pour éviter les effets de bord. React n'étant pas au sens propre un Framework il n'impose pas une structuration précise pour le développement de l'application. Nous utiliserons cependant dans le cours **Create-React-App**, outil permettant de construire un squelette applicatif qui donnera une structuration d'un projet React.

## DOM virtuel

JQuery manipule directement le DOM réel en Javascript ce qui ralentit considérablement l'exécution des scripts.

Le DOM virtuel est une inovation de React. En effet React ne manipule pas directement le DOM du navigateur, il manipule un DOM virtuel lui permettant de mettre à jour le DOM réel de manière optimisée. Le DOM virtuel permet également de s'abstraire du DOM du navigateur et permet donc de changer de cible (mobile, pdf, ...).

React permet de définir des composants, voyez les composants de React comme des éléments déclaratifs à l'instar des balises HTML. Vous pouvez sur ces éléments mettre de la logique script JS et contrôler le comportement ou modifier. Nous verrons également que nous pouvons introduire de la données dans ces éléments avec des props et state.

Les composants sont comme des **interfaces** utilisateurs, considérez les comme des éléments isolés, indépendants et réutilisables.

## Composant exemple

Nous allons tester React directement dans une page HTML en important les librairies dans celle-ci. L'exemple qui suit est à utiliser pour le développement. Bien sûr lorsque nous aurons vu les bases de React nous utiliserons des outils comme **create-react-app** pour deployer un squelette d'application. Les exemples et exercices dans la première partie du cours seront à faire dans un fichier.

*Lisez les commentaires dans le code pour mieux comprendre l'exemple ci-dessous.*

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Hello React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/javascript">
    // Rendu dans le DOM de deux components hiérarchiques
        ReactDOM.render(
            React.createElement('div', { 'style': { 'color': 'red' } },
                // définit un élément enfant à l'élément div
                React.createElement('h1', null, "Oh Hello React !")
            ),
            // identifiant root permettant de placer l'élément dans le DOM
            document.getElementById('root')
        );
    </script>
</body>
</html>
```

*Nous verrons que ce code "pur JS" est en réalité jamais utiliser pour écrire une Web App React et préfèrerons la syntaxe JSX développé par Facebook pour facilier l'écriture du code React.*


## Remarques

Pour travailler utilisez GitHub & https://jsfiddle.net/ pour tester et partager du code.