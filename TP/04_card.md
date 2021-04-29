# TP Card

Vous allez créer un jeu utilisant les technologies suivantes (contraintes) :

- React.

- Bootstrap Twitter pour les styles.

- Bootstrap Twitter.

- CRA squelette d'application.

Il n'y a pas de navigation. Tout se fera dans une page unique.

## Présentation du panier

Le panier est un panier d'un magazin bio vendant des fruits, créez quelques produits pour tester la logique métier de votre application. Voici comment vous allez construire l'application.

```txt

Bienvenue dans notre boutique

-------------------------------
[ Home ] [ nos fruits ] Votre panier est vide 
-------------------------------

Bienvenu sur notre boutique Bio.

```

## Page home 

Sur cette page présentez la boutique Bio en ligne.

## Page "Commencer une commande"

Sur cette page présentez uniquement 3 produits. Vous donnerez la possibilité de définir une quantité pour un produit et la possibilité de remettre à 0 les quantités de tout le panier.

```txt

Bienvenue dans notre boutique

-------------------------------
[ Home ] [ nos fruits ] [voir votre panier, 7 produits]
-------------------------------


[Reset] [ajouter au panier]

- apple [10]  [reset]

- raspberry [9]  [reset]

- strawberry [19]  [reset]

[ajouter au panier]

```

## Page panier

Cette page présentera l'ensemble des produits "à payer". Une fois cliquer sur **payer** l'ensemble des produits seront stockés dans votre state.

```txt

Bienvenue dans notre boutique

-------------------------------
[ Home ] [ nos fruits ] [voir votre panier]
-------------------------------

[Reset] [ajouter au panier]

- apple [20]  [reset]

- raspberry [9]  [reset]

- strawberry [19]  [reset]

[payer]

```
