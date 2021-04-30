import React from "react"

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        cart : null
    }

  }

  render() {
    const { products } = this.props; // littéral
    const names = Object.keys(products); // on récupère les clés des produits dans un tableau

    return (
     <ul>
         {names.map((name, i) => <li key={i}>Name : {name} Price: {products[name].total}</li>)}
     </ul>
    );
  }
}

export default Cart;
