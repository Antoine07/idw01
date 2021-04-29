# Composition

## props spécial children

Nous allons voir une propriété qui permet de faire passer d'autres composants à un composant donné. Cette méthode s'appelle de la **composition**. On utilisera la propriété particulière **this.props.children** pour la mettre en place.

### Définition d'un composant avec la propriété children


La propriété children permettra d'importer d'autre(s) composant(s) :

```js
class Widget extends React.Component {
  render() {

          <div className="container-widget">
              {this.props.children}
          </div>
      );
  }
}

```

Par exemple dans le composant App :

```js
class App extends React.Component {
        
  render() {

    return (
        <aside className="sidebar">
            <Widget color="red" >
              <nav>
                  <a href="#" >Red sidebar</a>
              </nav>
            </Widget>
            <Widget color="yellow" >
              <nav>
                  <a href="#" >Yellow sidebar</a>
              </nav>
            </Widget>
        </aside>
    );
  }
}

```

**Tout ce qui se trouve dans la balise Widget est passé en props.children.**

## Création de ses propres "entrées"

Vous pouvez également passer dans les attributs de vos composants d'autre(s) composant(s) :

```js
class Split extends React.Component {

  render(){
    return (
      <div className="side">
        <div className="side-left">
          {this.props.left}
        </div>
        <div className="side-right">
          {this.props.right}
        </div>
      </div>
    );
}
}

class App extends React.Component {
  render(){

    return (
        <Split
          left={<Sidebar />}
          right={<Sidebar />} 
        />
      );
  }
}
```
## Spécialisation

Les composants peuvent également être comme le dit la documentation officiel des "cas particulier" d'autres composants :

```js

class Dialog extends React.Component {

  render(){
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            {this.props.title}
          </h1>
          <p className="Dialog-message">
            {this.props.message}
          </p>
        </FancyBorder>
      );
  }
}

class WelcomeDialog extends React.Component {

  render(){
    return (
      <Dialog
        title="Bienvenue"
        message="Merci de visiter notre vaisseau spatial !" 
      />
    );
  }
}
```

## Remarques

La composition est largement utilisée en React pour définir, nous le verrons plus tard, des contextes, par exemple pour définir un store global avec Redux pour une application React. Elle est également utilisée pour définir des composants de styles avec styled components.