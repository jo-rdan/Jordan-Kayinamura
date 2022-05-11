import { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import "./styles/index.css";
import { getProductsByCategoryQuery } from "./utils/queries";
import { compose } from "redux";
import { connect } from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeLink = this.changeLink.bind(this);
  }

  changeLink = () => this.props.history.push("/product");

  render() {
    console.log(this.props.data);
    return (
      <div className='product-container'>
        <div className='product-category'>
          <p>{this.props?.data?.category?.name}</p>
        </div>
        <div className='product-listing'>
          {this.props?.data?.category?.products.map((product) => (
            <div
              className={`product-card ${!product.inStock ? "out-stock" : ""}`}
              onClick={this.changeLink}
              key={product.id}
            >
              {!product.inStock ? (
                <div className='product-stock'>
                  <span>
                    <p>out of stock</p>
                  </span>
                </div>
              ) : null}
              <div className='product'>
                <div>
                  <img
                    src={product.gallery[0]}
                    alt=''
                    className='product-img'
                  />
                  <span className='cart-hover'>
                    <img src='./images/cart_hover.png' alt='' />
                  </span>
                </div>
                <div>
                  <div className='product-name'>{product.name}</div>
                  <div className='product-price'>
                    {product.prices
                      .filter(
                        (price) =>
                          this.props.currencySymbol === price.currency.symbol
                      )
                      .map(
                        (price) => `${price.currency.symbol}${price.amount}`
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: state.categoryToFilter.category,
  currencySymbol: state.currencySwitcher.symbol,
});

export default compose(
  connect(mapStateToProps),
  graphql(getProductsByCategoryQuery, {
    name: "data",
    options: (props) => ({
      variables: { title: props.selectedCategory || "all" },
    }),
  })
)(withRouter(Products));
