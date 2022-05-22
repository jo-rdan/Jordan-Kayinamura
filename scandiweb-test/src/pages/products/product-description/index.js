import { Component } from "react";
import { graphql } from "react-apollo";
import { getProduct } from "./utils/query";
import "./styles/index.css";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/products-actions/productDescActions";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
    };

    this.selector = this.selector.bind(this);
  }

  selector = (type, item) => {
    return this.setState({ disable: false, [type]: item });
  };

  render() {
    return (
      <div className='container'>
        {this.props?.productData?.product ? (
          <>
            <div className='product-graphics'>
              {/* 1  */}
              <div className='thumbnails'>
                {/* thumbnails */}
                {this.props.productData.product.gallery.map((image) => (
                  <div
                    className={`thumb ${
                      this.state?.image === image ? "active" : ""
                    }`}
                    key={image}
                    onClick={() => this.selector("image", image)}
                  >
                    <img src={image} alt='' className='product-image' />
                  </div>
                ))}
              </div>
              {/* product image */}
              <div className='product-img'>
                <img
                  src={
                    this.state.image ||
                    this.props.productData.product.gallery[0]
                  }
                  alt=''
                />
              </div>
            </div>
            <div className='product-info'>
              <div className='product-details'>
                <div className='title'>
                  {this.props.productData.product.name}
                </div>
                <div className='subtitle'>
                  {this.props.productData.product.brand}
                </div>
              </div>
              {this.props.productData.product.attributes.map((attribute) => {
                switch (attribute.type) {
                  case "text":
                    return (
                      <div className='product-size' key={attribute.id}>
                        <h5 className='size-label'>
                          {attribute.name.toUpperCase()}:{" "}
                        </h5>
                        <div className='size-options'>
                          {attribute.items.map((item) => (
                            <>
                              <div
                                className={`size ${
                                  item.value === this.state[attribute.name]
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  this.setState({
                                    disable: false,
                                    [attribute.name]: item.value,
                                  })
                                }
                              >
                                {item.value}
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    );
                  case "swatch":
                    return (
                      <div className='product-color' key={attribute.id}>
                        <h5 className='color-label'>
                          {attribute.name.toUpperCase()}:{" "}
                        </h5>
                        <div className='color-options'>
                          {attribute.items.map((item) => (
                            <>
                              <div
                                className={`color ${
                                  item.value === this.state.color
                                    ? "selected"
                                    : ""
                                }`}
                                style={{ backgroundColor: item.value }}
                                onClick={() =>
                                  this.selector("color", item.value)
                                }
                              ></div>
                            </>
                          ))}
                        </div>
                      </div>
                    );
                  default:
                    return null;
                }
              })}

              <div className='product-price'>
                <h5 className='price-label'>PRICE: </h5>
                <p className='price'>
                  {this.props.productData.product.prices
                    .filter(
                      (price) =>
                        this.props.currencySymbol === price.currency.symbol
                    )
                    .map((price) => `${price.currency.symbol}${price.amount}`)}
                </p>
              </div>
              <button
                type='button'
                className={`action-btn ${this.state.disable ? "disabled" : ""}`}
                disabled={this.state.disable}
                onClick={() =>
                  this.props.addToCart({
                    ...this.props.productData.product,
                    selectedArgs: this.state,
                    quantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.props.productData.product.description,
                  }}
                ></p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: state.categoryToFilter.category,
  currencySymbol: state.currencySwitcher.symbol,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { addToCart }),
  graphql(getProduct, {
    name: "productData",
    options: ({ match }) => ({ variables: { id: match.params.id } }),
  })
)(Product);
