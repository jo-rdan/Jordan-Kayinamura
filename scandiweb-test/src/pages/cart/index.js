import { Component } from "react";
import CartDetails from "../../components/common/cart-details/CartDetails";
import "./styles/index.css";

class CartPage extends Component {
  render() {
    return (
      <div className='cart-container'>
        <h1>Cart</h1>
        <CartDetails size='normal' />
        <div className='fees'>
          <p>
            Tax: <span>$15.00</span>
          </p>
          <p>
            Qty: <span>3</span>
          </p>
          <p>
            Total: <span>$200.00</span>
          </p>
          <button>ORDER</button>
        </div>
      </div>
    );
  }
}

export default CartPage;
