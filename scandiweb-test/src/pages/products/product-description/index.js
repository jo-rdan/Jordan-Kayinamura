import { Component } from "react";
import "./styles/index.css";

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='product-graphics'>
          {/* 1  */}
          <div className='thumbnails'>
            {/* thumbnails */}
            <div className='thumb'>
              <img src='./images/products/Product D.png' alt='' />
            </div>
            <div className='thumb'>
              <img src='./images/products/Product D.png' alt='' />
            </div>
            <div className='thumb'>
              <img src='./images/products/Product D.png' alt='' />
            </div>
          </div>
          {/* product image */}
          <div className='product-img'>
            <img src='./images/products/Product D.png' alt='' />
          </div>
        </div>
        <div className='product-info'>
          <div className='product-details'>
            <div className='title'>Title</div>
            <div className='subtitle'>SubTitle</div>
          </div>
          <div className='product-size'>
            <h5 className='size-label'>SIZE: </h5>
            <div className='size-options'>
              <div className='size disabled'>XS</div>
              <div className='size selected'>S</div>
              <div className='size'>M</div>
              <div className='size'>L</div>
            </div>
          </div>
          <div className='product-color'>
            <h5 className='color-label'>COLOR: </h5>
            <div className='color-options'>
              <div className='color blue active'></div>
              <div className='color yellow'></div>
              <div className='color green'></div>
            </div>
          </div>
          <div className='product-price'>
            <h5 className='price-label'>PRICE: </h5>
            <p className='price'>$50.00</p>
          </div>
          {/* <div className="action-btn"> */}
          <button className='action-btn'>Add to Cart</button>
          {/* </div> */}
          <div>
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
