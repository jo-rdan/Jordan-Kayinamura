import { Component } from "react";
import "./styles/index.css";
import CartDetails from "../cart-details/CartDetails";
class Minicart extends Component {
  render() {
    return (
      <div className='modal-bg'>
        <div className='mini-container'>
          <h4>My Bag, 1 item</h4>
          <CartDetails size='mini' />
          {/* <div className='mini-cart'>
            <div className='products-details'>
              <div className='mini-title'>Title</div>
              <p className='mini-subtitle'>Subtitle</p>
              <p className='mini-price'>$50.00</p>
              <div className='sizes'>
                <h5>SIZE: </h5>
                <div className='size-mini'>
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
            <div className='mini-actions'>
              <div className='controls'>
                <div className='plus'>+</div>
                <div>1</div>
                <div className='minus'>-</div>
              </div>
              <div className='product-img'>
                <img src='./images/products/Product D.png' alt='fuck' />
              </div>
            </div>
          </div> */}
          <div className='cart-footer'>
            <h4>
              Total: <span>$200.00</span>
            </h4>
            <div className='cart-buttons'>
              <button className='cart-basic'>View cart</button>
              <button className='cart-primary'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Minicart;
