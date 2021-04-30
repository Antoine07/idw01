import React from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

import FRUITS from "./components/storage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      message: "",
      cart: {}, // littéral pour la commande [ nom_produit : { totalPrix : 18}]
      quantity: 0,
      page: {
        home: true,
        cart: false,
      },
      empty: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit() {
    const cart = this.state.cart ; // ici on reverra cela avec Redux méthode plus stricte (copie)

    const products = this.state.products.map((product) => {
      const { name, total, quantity } = product;

      if (quantity > 0) {
        if (this.state.cart[name])
          cart[name] = { total: total + this.state.cart[name].total };
        else cart[name] = { total: total };
      }

      product.quantity = 0;
      product.total = 0;

      return product;
    });

    this.setState({
      empty: true,
      page: {
        home: false,
        cart: true,
      },
      cart: cart,
      products: products,
      quantity: cart.length,
    });
  }

  handleReset() {

    const products = this.state.products; // ici on reverra cela avec Redux méthode plus stricte (copie)

    products.map(product => {
      product.stock += product.quantity;
      product.quantity = 0;
      product.total = 0;

      return product;
    });

    this.setState({ products : products, empty : true }) ;
  }

  // name : nom du produit et step +1 ou -1
  handleChange(name, step) {
    let quantity = 0;

    const products = this.state.products.map((product) => {
      if (product.name === name) {
        product.stock = product.stock - step;
        product.total += parseFloat(step) * product.price;
        product.quantity += parseInt(step);
      }

      quantity += product.quantity;

      return product;
    });

    this.setState({
      products: products,
      empty: quantity > 0 ? false : true,
    });
  }

  componentDidMount() {
    this.setState({
      products: FRUITS,
    });
  }

  render() {
    const {
      products,
      page: { home, cart }, // assignation par décomposition { page : { home : false, cart : true}}
      empty,
      cart: productsCart, // renommer une constante car on a déjà un cart plus haut
    } = this.state;

    return (
      <>
        <div className="container">
          <nav>
            <button
              className={`btn ${
                home ? "btn-outline-primary" : "btn-primary "
              } `}
              style={{ margin: "5px" }}
              onClick={() =>
                this.setState({ page: { home: true, cart: false } })
              }
            >
              Product
            </button>
            <button
              className={`btn ${
                cart ? "btn-outline-primary" : "btn-primary "
              } `}
              style={{ margin: "5px" }}
              onClick={() =>
                this.setState({ page: { home: false, cart: true } })
              }
            >
              Cart
            </button>
          </nav>
          <div className="col-md-12">
            {home && (
              <Products
                products={products}
                handleChange={this.handleChange} // gère le + et - des products dans le panier
                handleSubmit={this.handleSubmit}
                handleReset={this.handleReset}
                empty={empty}
              />
            )}
            {cart && <Cart products={productsCart} />}
          </div>
        </div>
      </>
    );
  }
}

export default App;
