import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import CartDetails from "../../components/common/cart-details/CartDetails";
import { checkout } from "../../redux/actions/cart/cartActions";
import "./styles/index.css";

class CartPage extends Component {
  render() {
    const { currencySymbol, products, checkout } = this.props;
    const total = `${currencySymbol}${products
      .map((product) =>
        product.prices
          .filter((price) => price.currency.symbol === currencySymbol)
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
        {products.length > 0 ? (
          <div className='fees'>
            <p>
              Tax 18%: <span>{`${currencySymbol}${tax.toFixed(2)}`}</span>
            </p>
            <p>
              Quantity: <span>{products.length}</span>
            </p>
            <p>
              Total: <span>{`${currencySymbol}${totalPrice.toFixed(2)}`}</span>
            </p>
            <button onClick={() => checkout()}>ORDER</button>
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

export default compose(
  withRouter,
  connect(mapStateToProps, { checkout })
)(CartPage);
