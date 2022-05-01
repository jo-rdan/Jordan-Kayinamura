import { Component } from "react";
import "./styles/index.css";

class CartPage extends Component {
  render() {
    return (
      <div className='cart-container'>
        <h1>Cart</h1>
        <div className='products-cart'>
          <div className='product-details'>
            <div className='title'>Title</div>
            <p className='subtitle'>Subtitle</p>
            <p className='price'>$50.00</p>
            <div>
              <h5>SIZE: </h5>
              <div className='size-options'>
                <div className='size disabled'>XS</div>
                <div className='size selected'>S</div>
                <div className='size'>M</div>
                <div className='size'>L</div>
              </div>
            </div>
            <div>
              <h5>COLOR: </h5>
              <div className='color-options'>
                <div className='color blue active'></div>
                <div className='color yellow'></div>
                <div className='color green'></div>
              </div>
            </div>
          </div>
          <div className='actions'>
            <div className='controls'>
              <div className='plus'>+</div>
              <div>1</div>
              <div className='minus'>-</div>
            </div>
            <div className='product-img'>
              <img src='./images/products/Product D.png' alt='fuck' />
              <div className='carousel'>
                <div className='arrows'>
                  <div className='left'>&lt;</div>
                  <div className='right'>&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
