import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.handleSubmit();
  }

  render() {
    const { products, handleChange, handleReset, empty } = this.props;

    return (
      <>
        {products.map(({ name, price, quantity, stock }, i) => (
          <div className="col-sm-12" key={i}>
            <label htmlFor="product" className="form-label">
              Name: {name} price: {price}
            </label>
            <p>
              Stock : {stock}, quantity : {quantity}
            </p>
            <button
              onClick={() => handleChange(name, 1)}
              className="btn btn-secondary"
              style={{ marginRight: "10px", marginBotton: "10px" }}
              disabled={stock === 0}
            >
              +
            </button>
            <button
              onClick={() => handleChange(name, -1)}
              className="btn btn-secondary"
              style={{ marginBotton: "10px" }}
              disabled={quantity === 0}
            >
              -
            </button>
          </div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-12" style={{ marginTop: "30px" }}>
            <input
              className="btn btn-warning"
              type="submit"
              value="Ajouter au panier"
              disabled={empty}
            />
          </div>
        </form>
        <div className="col-sm-12" style={{ marginTop: "30px" }}>
          <button
            onClick={handleReset}
            disabled={empty}
            className="btn btn-danger"
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default Products;
