import { Component } from "react";
import Minicart from "./components/common/mini-cart";
import NavBar from "./components/common/navbar";
import CartPage from "./pages/cart";
import Product from "./pages/products/product-description";
import Products from "./pages/products/product-listings";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Products />
        <Product />
        <CartPage />
        <Minicart />
      </>
    );
  }
}

export default App;
