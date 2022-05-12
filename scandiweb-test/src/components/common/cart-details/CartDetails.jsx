import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  changeQuantity,
  removeProduct,
} from "../../../redux/actions/cart/cartActions";
import Arrows from "../image-slider/Arrows";
import SliderContent from "../image-slider/SliderContent";
import "./styles/cart-details.css";

class CartDetails extends Component {


  render() {

    return (
      <>
        {this.props.products.length > 0 ? (
          this.props.products.map((product) => {
            return (
              <div
                className={`${this.props.size === "normal" ? "products" : "mini"
                  }-cart`}
              >
                <div
                  className={`${this.props.size === "normal" ? "product" : "mini"
                    }-details`}
                >
                  <div
                    className={`${this.props.size === "normal" ? "products" : "mini"
                      }-title`}
                  >
                    {product.name}
                  </div>
                  <p
                    className={`${this.props.size === "normal" ? "products" : "mini"
                      }-subtitle`}
                  >
                    {product.brand}
                  </p>
                  <p
                    className={`${this.props.size === "normal" ? "products" : "mini"
                      }-price`}
                  >
                    {product.prices
                      .filter(
                        (price) =>
                          this.props.currencySymbol === price.currency.symbol
                      )
                      .map(
                        (price) =>
                          `${price.currency.symbol}${price.amount * product.quantity
                          }`
                      )}
                  </p>

                  <div>
                    {product.attributes.map((attribute) => {
                      switch (attribute.type) {
                        case "text":
                          return (
                            <>
                              <h5>{attribute.name.toUpperCase()}: </h5>
                              <div
                                className={`${this.props.size === "normal"
                                  ? "products"
                                  : "mini"
                                  }-sizes`}
                              >
                                {attribute.items.map((item) => (
                                  <>
                                    <div
                                      className={`${this.props.size === "normal"
                                        ? "products"
                                        : "mini"
                                        }-size ${product.selectedArgs[attribute.name] ===
                                          item.value
                                          ? "selected"
                                          : ""
                                        }`}
                                      onClick={() =>
                                        this.setState({
                                          [attribute.name]: item.value,
                                        })
                                      }
                                    >
                                      {item.value}
                                    </div>
                                  </>
                                ))}
                              </div>
                            </>
                          );
                        case "swatch":
                          return (
                            <>
                              <div>
                                <h5>{attribute.name.toUpperCase()}: </h5>
                                <div
                                  className={`${this.props.size === "normal"
                                    ? "products"
                                    : "mini"
                                    }-colors`}
                                >
                                  {attribute.items.map((item) => (
                                    <>
                                      <div
                                        className={`${this.props.size === "normal"
                                          ? "products"
                                          : "mini"
                                          }-color ${product.selectedArgs[
                                            attribute.name.toLowerCase()
                                          ] === item.value
                                            ? "active"
                                            : ""
                                          }`}
                                        style={{ backgroundColor: item.value }}
                                      ></div>
                                    </>
                                  ))}
                                </div>
                              </div>
                            </>
                          );

                        default:
                          return null;
                      }
                    })}
                  </div>
                </div>
                <div
                  className={`${this.props.size === "normal" ? "products" : "mini"
                    }-actions`}
                >
                  <div className='controls'>
                    <div
                      className='plus'
                      onClick={() => this.props.changeQuantity("+", product.id)}
                    >
                      +
                    </div>
                    <div>{product.quantity}</div>
                    <div
                      className='minus'
                      onClick={() =>
                        product.quantity > 1 &&
                        this.props.changeQuantity("-", product.id)
                      }
                    >
                      -
                    </div>
                  </div>
                  <div
                    className={`${this.props.size === "normal" ? "product" : "mini"
                      }-img`}
                  >
                    <SliderContent
                      active={this.props.currentId === product.id && this.props.currentIndex <= product.gallery.length - 1 ? this.props.currentIndex : 0}
                      content={product}
                    />
                    {this.props.size === "normal" &&
                      product.gallery.length > 1 ? (
                      <div className='carousel'>
                        <Arrows
                          data={product}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div
                  className='close-btn'
                  onClick={() => this.props.removeProduct(product)}
                >
                  <p>x</p>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className='empty-msg'>No products in the cart</h2>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cartItems.items,
  currentId: state.cartItems.currentId,
  currentIndex: state.cartItems.currentIndex,
  currencySymbol: state.currencySwitcher.symbol,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { changeQuantity, removeProduct })
)(CartDetails);
