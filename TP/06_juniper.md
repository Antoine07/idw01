# TP Game Juniper Green

Vous allez créer un jeu utilisant les technologies suivantes (contraintes) :

- React.

- Bootstrap Twitter pour les styles.

- Bootstrap Twitter.

- CRA squelette d'application (facultatif).

## Présentation du jeu

Le jeu possède trois règles :

Le Joueur 1 choisit un nombre entre 1 et 100.
À tour de rôle, chaque joueur doit choisir un nombre parmi les multiples ou les diviseurs du nombre choisi précédemment par son adversaire et inférieur à 100.

Un nombre ne peut être joué qu'une seule fois.

Le perdant étant le joueur qui ne trouve plus de multiples ou de diviseurs communs au nombre précédemment choisi.

## Installation

Initialisez le projet comme d'habitude et choisissez. Vous pouvez utiliser la CRA React.


## Présentation de la principale

Sur la première page vous devez créez les deux "liens" suivants : "Les règles du jeu" et "Commencer une partie".

```txt

Bienvenue voici le Jeu Juniper Green

[ Les règles du jeu ]

[ Commencer une partie ]

```

Respectivement le lien "Les règles du jeu" permet d'afficher les règles du jeu. Et le lien "Commencer une partie" permettra de lancer une partie.

## Page présentation du jeu "Les règles du jeu"

Sur cette page présentez les règles du jeu et créez un lien pour revenir sur la page principale.

```txt

Règle du jeu Juniper Green

[Revenir sur la page principale]

Le jeu possède trois règles :

Le Joueur 1 choisit un nombre entre 1 et 100.
À tour de rôle, chaque joueur doit choisir un nombre parmi 
les multiples ou les diviseurs du nombre choisi précédemment 
par son adversaire et inférieur à 100.

Un nombre ne peut être joué qu'une seule fois.

Le perdant étant le joueur qui ne trouve plus de multiples 
ou de diviseurs communs au nombre précédemment choisi.

```

## Page "Commencer une partie"

Sur cette page vous lancerez le jeu en proposant un nombre déterminé par le script. Une fois la partie terminée on sera alors redirigé vers la page score qui affichera les détails de la partie, voir ci-après. Un bouton reset permettra de réinitialiser le jeu, dans ce cas on sera redirigé sur la page principale et on pourra alors rejouer une partie.

Vous afficherez également sur cette page les choix des joueurs.

```txt

Game Juniper Green

[Revenir sur la page principale]

[Les règles du jeu]

[Reset]

C'est à vous !

Computer : 97

Votre choix : [  ]

[valider]


Vos choix :        Choix du computer :

22                  11

2                   10

1                   17

```

## Page score

Une fois le jeu terminé vous devez afficher l'ensemble des choix de chaque joueur ainsi que le nombre de tour(s) du jeu et la date et l'heure du début de la partie. Pour rejouer vous proposerez un bouton "rejouer".

```txt

Game Juniper Green

[Revenir sur la page principale]

[ Rejouez ?]

Le jeu est terminé, vous avez gagné en 19 tours.

Vos choix :        Choix du computer :

22                  11

2                   10

1                   17

...
```

Bon développement.
