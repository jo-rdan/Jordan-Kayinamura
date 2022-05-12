import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import CartDetails from "../../components/common/cart-details/CartDetails";
import "./styles/index.css";

class CartPage extends Component {
  render() {
    const total = `${this.props.currencySymbol}${this.props.products
      .map((product) =>
        product.prices
          .filter(
            (price) => price.currency.symbol === this.props.currencySymbol
          )
          .map((p) => p.amount * product.quantity)
      )
      .flat(1)
      .reduce((a, b) => a + b, 0)}`;

    const tax = parseFloat(total.slice(1)) * 0.18;

    const totalPrice = parseFloat(total.slice(1)) + tax;

    return (
      <div className='cart-container'>
        <h1>Cart</h1>
        <CartDetails size='normal' />
        {this.props.products.length > 0 ? (
          <div className='fees'>
            <p>
              Tax 18%:{" "}
              <span>{`${this.props.currencySymbol}${tax.toFixed(2)}`}</span>
            </p>
            <p>
              Quantity: <span>{this.props.products.length}</span>
            </p>
            <p>
              Total:{" "}
              <span>{`${this.props.currencySymbol}${totalPrice.toFixed(
                2
              )}`}</span>
            </p>
            <button>ORDER</button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cartItems.items,
  currencySymbol: state.currencySwitcher.symbol,
});

export default compose(withRouter, connect(mapStateToProps))(CartPage);
