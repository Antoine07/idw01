# TP Yam

Vous allez créer une petite application qui permet de lancer 5 dés pour jouer au Yam. Il n'y aura qu'un seul joueur dans l'application et nous testerons que le lancer de 5 dés. Nous allons faire des statistiques sur les différentes combinaisons du jeu. Vous ne testerez que certaines combinaisons de Yam (voir plus bas).

Créez une application avec React ainsi que **bootstrap CSS**.

Utilisez la structure de fichier vue en cours pour développer cet exercice.

Vous créerez une fonction **lance_de** pour générer le lancer des 5 dés. L'application aura deux pages uniquement.

```js
const lance_des = () => { 
    // TODO
}
```

## Page principale

Sur la page principale vous placerez un bouton Lancer afin de générer le lancer des 5 dés, un champ de type text permettra de fixer le nombre de lancer(s) que l'on souhaite réaliser. Notez qu'un lancer correspond à 1 lancer de 5 dés. 

Faites en sorte que lorsqu'on clique sur Yam ou Stat les composants Yam ou Stat s'affichent.

```txt

--------------------------------------------

    Yam Stat

--------------------------------------------

Nombre de lancer(s) [19]

[ Lancer ]

```

## Page Stat

Elle affichera les résultats des statistiques du jeu.

Dans l'ordre des recherches on calculera le nombre de yam, carré, brelan et double paires quelques soient la valeur des dés.

Vous testerez les combinaisons suivantes sur chaque lancer. Par exemple si on lance 10 fois les 5 dés on pourrait avoir les statistiques suivantes :

- Brelan : 2 (trois dés identiques)

- Carré : 1 (quatre dés indentiques)

- Double paire : 4 (deux dés identiques X 2 )

- Yam : 2 (5 dés identiques)

### Wireframe de la page Stat

```txt

--------------------------------------------

    Yam [Stat]

--------------------------------------------

[ Enregistrer ]  <-- option facultative

Résultats : 

- Brelan : 1 (trois dés identiques)

- Carré : 1 (quatre dés indentiques)

- Double paire : 1 (deux dés X 2 identiques)

- Yam : 1 (5 dés identiques)

```


Option facultative du projet :

- Un bouton Enregistrer permettra d'enregistrer en localStorage.