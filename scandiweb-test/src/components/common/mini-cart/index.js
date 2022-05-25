import { Component } from "react";
import "./styles/index.css";
import CartDetails from "../cart-details/CartDetails";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkout, openCart } from "../../../redux/actions/cart/cartActions";
class Minicart extends Component {
  render() {
    const { products, currencySymbol, checkout, openCart } = this.props;
    return (
      <div className="modal-bg">
        <div className="mini-container">
          <h4>{`My Bag, ${products.length} item${
            products.length > 1 ? "s" : ""
          }`}</h4>
          <CartDetails size="mini" />
          <div className="cart-footer">
            <h4>
              Total:{" "}
              <span>{`${currencySymbol}${products
                .map((product) =>
                  product.prices
                    .filter((price) => price.currency.symbol === currencySymbol)
                    .map((p) => p.amount * product.quantity)
                )
                .flat(1)
                .reduce((a, b) => a + b, 0)
                .toFixed(2)}`}</span>
            </h4>
            <div className="cart-buttons">
              <button className="cart-basic">
                <Link to={"/cart"} onClick={() => openCart()}>
                  View bag
                </Link>
              </button>
              <button className="cart-primary" onClick={() => checkout()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cartItems.items,
  currencySymbol: state.currencySwitcher.symbol,
});

export default connect(mapStateToProps, { openCart, checkout })(Minicart);
