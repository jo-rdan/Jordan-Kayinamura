import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles/index.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeLink = this.changeLink.bind(this);
  }

  changeLink = () => this.props.history.push("/product");

  render() {
    return (
      <div className='product-container'>
        <div className='product-category'>
          <p>Category name</p>
        </div>
        <div className='product-listing'>
          <div className='product-card' onClick={this.changeLink}>
            <div className='product'>
              <div>
                <img src='./images/products/Product A.png' alt='' />
                <span className='cart-hover'>
                  <img src='./images/cart_hover.png' alt='' />
                </span>
              </div>
              <div>
                <div className='product-name'>Title</div>
                <div className='product-price'>$50.00</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='product'>
              <div>
                <img src='./images/products/Product B.png' alt='' />
                <span className='cart-hover'>
                  <img src='./images/cart_hover.png' alt='' />
                </span>
              </div>
              <div>
                <div className='product-name'>Title</div>
                <div className='product-price'>$50.00</div>
              </div>
            </div>
          </div>

          <div className='product-card'>
            <div className='product-stock'>
              <span>
                <p>out of stock</p>
              </span>
            </div>
            <div className='product'>
              <div>
                <img src='./images/products/Product C.png' alt='' />
                <span className='cart-hover'>
                  <img src='./images/cart_hover.png' alt='' />
                </span>
              </div>
              <div>
                <div className='product-name'>Title</div>
                <div className='product-price'>$50.00</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='product'>
              <div>
                <img src='./images/products/Product C.png' alt='' />
                <span className='cart-hover'>
                  <img src='./images/cart_hover.png' alt='' />
                </span>
              </div>
              <div>
                <div className='product-name'>Title</div>
                <div className='product-price'>$50.00</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='product'>
              <div>
                <img src='./images/products/Product C.png' alt='' />
                <span className='cart-hover'>
                  <img src='./images/cart_hover.png' alt='' />
                </span>
              </div>
              <div>
                <div className='product-name'>Title</div>
                <div className='product-price'>$50.00</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='product'>
              <div>
                <img src='./images/products/Product C.png' alt='' />
                <span className='cart-hover'>
                  <img src='./images/cart_hover.png' alt='' />
                </span>
              </div>
              <div>
                <div className='product-name'>Title</div>
                <div className='product-price'>$50.00</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default withRouter(Products);
