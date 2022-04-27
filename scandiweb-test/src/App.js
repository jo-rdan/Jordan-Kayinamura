import {Component} from "react";
import NavBar from "./components/common/navbar";
import Products from "./pages/products/product-listings";


class App extends Component{
  render() {
    return (
      <>
      <NavBar />
      <Products />
      </>
    );
  }
}

export default App;
