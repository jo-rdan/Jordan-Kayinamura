import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/common/navbar";
import Product from "./pages/products/product-description";
import Products from "./pages/products/product-listings";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path='/product'>
            <Product />
          </Route>
          <Route path='/'>
            <Products />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
