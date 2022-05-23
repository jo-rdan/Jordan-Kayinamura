import { Component } from "react";
import { graphql } from "react-apollo";
import { getProduct } from "../../../utils/queries/product-description";
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
      args: {},
    };

    this.selector = this.selector.bind(this);
  }

  selector = (type, item) => {
    return this.setState({
      disable: false,
      args: { ...this.state.args, [type]: item },
    });
  };

  render() {
    const {
      productData: { product },
      currencySymbol,
      addToCart,
    } = this.props;
    return (
      <div className='container'>
        {product ? (
          <>
            <div className='product-graphics'>
              {/* 1  */}
              <div className='thumbnails'>
                {/* thumbnails */}
                {product.gallery.map((image, index) => (
                  <div
                    className={`thumb ${
                      this.state?.image === image ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => this.setState({ image })}
                  >
                    <img src={image} alt='' className='product-image' />
                  </div>
                ))}
              </div>
              {/* product image */}
              <div className='product-img'>
                <img src={this.state.image || product.gallery[0]} alt='' />
              </div>
            </div>
            <div className='product-info'>
              <div className='product-details'>
                <div className='title'>{product.name}</div>
                <div className='subtitle'>{product.brand}</div>
              </div>
              {product.attributes.map((attribute) => {
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
                                key={item.id}
                                className={`size ${
                                  item.value === this.state.args[attribute.name]
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  this.setState({
                                    disable: false,
                                    args: {
                                      ...this.state.args,
                                      [attribute.name]: item.value,
                                    },
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
                                key={item.id}
                                className={`color ${
                                  item.value === this.state.args.color
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
                  {product.prices
                    .filter((price) => currencySymbol === price.currency.symbol)
                    .map((price) => `${price.currency.symbol}${price.amount}`)}
                </p>
              </div>
              <button
                type='button'
                className={`action-btn ${
                  this.state.disable &&
                  product.attributes.length > 0 &&
                  product.attributes.every(
                    (attribute) =>
                      !Object.keys(this.state.args).includes(attribute.name)
                  )
                    ? "disabled"
                    : ""
                }`}
                disabled={this.state.disable && product.attributes.length > 0}
                onClick={() =>
                  addToCart({
                    ...product,
                    selectedArgs: { ...this.state.args },
                    quantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: product.description,
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
