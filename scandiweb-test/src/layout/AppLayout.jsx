import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import MiniCart from "../components/common/mini-cart";
import Cart from "../pages/cart";
import Product from "../pages/products/product-description";
import Products from "../pages/products/product-listings";

class AppLayout extends Component {
  render() {
    const { openCart } = this.props;
    return (
      <>
        {openCart ? <MiniCart /> : null}
        <Switch>
          <Route path="/:category/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  openCart: state.cartItems.openCart,
});

export default connect(mapStateToProps)(AppLayout);
