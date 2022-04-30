import { Component } from "react";
import NavBar from "./components/common/navbar";
import Product from "./pages/products/product-description";
import Products from "./pages/products/product-listings";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        {/* <Products /> */}
        <Product />
      </>
    );
  }
}

export default App;
