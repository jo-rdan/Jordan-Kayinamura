import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/common/navbar";
import AppLayout from "./layout/AppLayout";
// import CartPage from "./pages/cart";
// import Product from "./pages/products/product-description";
// import Products from "./pages/products/product-listings";
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path={"/"} component={AppLayout} />
        </Switch>
      </>
    );
  }
}

export default App;
