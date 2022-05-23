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
    const { products, size, currentId, currentIndex, currencySymbol, changeQuantity, removeProduct } = this.props;
    return (
      <>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div
                className={`${size === "normal" ? "products" : "mini"
                  }-cart`}
              >
                <div
                  className={`${size === "normal" ? "product" : "mini"
                    }-details`}
                >
                  <div
                    className={`${size === "normal" ? "products" : "mini"
                      }-title`}
                  >
                    {product.name}
                  </div>
                  <p
                    className={`${size === "normal" ? "products" : "mini"
                      }-subtitle`}
                  >
                    {product.brand}
                  </p>
                  <p
                    className={`${size === "normal" ? "products" : "mini"
                      }-price`}
                  >
                    {product.prices
                      .filter(
                        (price) =>
                          currencySymbol === price.currency.symbol
                      )
                      .map(
                        (price) =>
                          `${price.currency.symbol}${(price.amount * product.quantity
                          ).toFixed(2)}`
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
                                className={`${size === "normal"
                                  ? "products"
                                  : "mini"
                                  }-sizes`}
                              >
                                {attribute.items.map((item) => (
                                  <>
                                    <div
                                      key={item.id}
                                      className={`${size === "normal"
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
                                  className={`${size === "normal"
                                    ? "products"
                                    : "mini"
                                    }-colors`}
                                >
                                  {attribute.items.map((item) => (
                                    <>
                                      <div
                                        key={item.id}
                                        className={`${size === "normal"
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
                  className={`${size === "normal" ? "products" : "mini"
                    }-actions`}
                >
                  <div className='controls'>
                    <div
                      className='plus'
                      onClick={() => changeQuantity("+", product)}
                    >
                      +
                    </div>
                    <div>{product.quantity}</div>
                    <div
                      className='minus'
                      onClick={() =>
                        product.quantity > 1 &&
                        changeQuantity("-", product)
                      }
                    >
                      -
                    </div>
                  </div>
                  <div
                    className={`${size === "normal" ? "product" : "mini"
                      }-img`}
                  >
                    <SliderContent
                      active={currentId === product.id && currentIndex <= product.gallery.length - 1 ? currentIndex : 0}
                      content={product}
                    />
                    {size === "normal" &&
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
                  className={`${size === "normal" ? "products" : "mini"
                    }-close`}
                  onClick={() => removeProduct(product)}
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
