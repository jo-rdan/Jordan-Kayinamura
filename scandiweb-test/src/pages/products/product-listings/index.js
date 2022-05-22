import { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import "./styles/index.css";
import { getProductsByCategoryQuery } from "./utils/queries";
import { compose } from "redux";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/products-actions/productDescActions";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.navigateToProduct = this.navigateToProduct.bind(this);
  }

  navigateToProduct = (id) => this.props.history.push(`/product/${id}`);

  render() {
    return (
      <>
        <div className='product-container'>
          <div className='product-category'>
            <p>{this.props?.data?.category?.name}</p>
          </div>
          <div className='product-listing'>
            {this.props?.data?.category?.products.map((product) => (
              <div
                className={`product-card ${
                  !product.inStock ? "out-stock" : ""
                }`}
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
                    <Link
                      to={product.inStock ? `/product/${product.id}` : null}
                    >
                      <img
                        src={product.gallery[0]}
                        alt=''
                        className='product-img'
                      />
                    </Link>
                    <span
                      className='cart-hover'
                      onClick={() =>
                        product.attributes.length <= 0 && product.inStock
                          ? this.props.addToCart({
                              ...product,
                              selectedArgs: this.state,
                              quantity: 1,
                            })
                          : null
                      }
                    >
                      <img src='./images/cart_hover.png' alt='' />
                    </span>
                  </div>
                  <div>
                    <div
                      className='product-name'
                      // onClick={
                      //   product.inStock
                      //     ? () => this.navigateToProduct(product.id)
                      //     : null
                      // }
                    >
                      {product.name}
                    </div>
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: state.categoryToFilter.category,
  currencySymbol: state.currencySwitcher.symbol,
});

export default compose(
  connect(mapStateToProps, { addToCart }),
  graphql(getProductsByCategoryQuery, {
    name: "data",
    options: (props) => ({
      variables: { title: props.selectedCategory || "all" },
    }),
  })
)(withRouter(Products));
