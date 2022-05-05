import { Component } from "react";
import './styles/cart-details.css'

class CartDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={`${this.props.size === 'normal' ? 'products' : "mini"}-cart`}>
        <div className={`${this.props.size === 'normal' ? 'product' : "mini"}-details`}>
          <div className={`${this.props.size === 'normal' ? 'products' : "mini"}-title`}>Title</div>
          <p className={`${this.props.size === 'normal' ? 'products' : "mini"}-subtitle`}>Subtitle</p>
          <p className={`${this.props.size === 'normal' ? 'products' : "mini"}-price`}>$50.00</p>
          <div>
            <h5>SIZE: </h5>
            <div className={`${this.props.size === 'normal' ? "products" : "mini"}-sizes`}>
              <div className={`${this.props.size === 'normal' ? "products" : "mini"}-size disabled`}>XS</div>
              <div className={`${this.props.size === 'normal' ? "products" : "mini"}-size selected`}>S</div>
              <div className={`${this.props.size === 'normal' ? "products" : "mini"}-size`}>M</div>
              <div className={`${this.props.size === 'normal' ? "products" : "mini"}-size`}>L</div>
            </div>
          </div>
          <div>
            <h5>COLOR: </h5>
            <div className={`${this.props.size === 'normal' ? "products" : "mini"}-colors`}>
              <div className={`${this.props.size === 'normal' ? "products" : "mini"}-color blue active`}></div>
              <div className={`${this.props.size === 'normal' ? "products" : "mini"}-color yellow`}></div>
              <div className={`${this.props.size === 'normal' ? "products" : "mini"}-color green`}></div>
            </div>
          </div>
        </div>
        <div className={`${this.props.size === 'normal' ? 'products' : "mini"}-actions`}>
          <div className='controls'>
            <div className='plus'>+</div>
            <div>1</div>
            <div className='minus'>-</div>
          </div>
          <div className={`${this.props.size === 'normal' ? 'product' : "mini"}-img`}>
            <img src='./images/products/Product D.png' alt='' />
            {this.props.size === 'normal' ? <div className='carousel'>
              <div className='arrows'>
                <div className='left'>&lt;</div>
                <div className='right'>&gt;</div>
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default CartDetails;