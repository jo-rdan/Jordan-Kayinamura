import { Component } from "react";
import { NavLink } from "react-router-dom";
import { graphql } from "react-apollo";
import { compose } from "redux";
import { changeCurrencySymbol } from "../../../redux/actions/currency-switcher/currencySwitcher";
import { getProductsByCategory } from "../../../redux/actions/products-actions/productsActions";
import { openCart } from "../../../redux/actions/cart/cartActions";
import { getCategories, getCurrencies } from "../../../utils/queries/nav";
import { connect } from "react-redux";
import "./styles/index.css";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurrencies: false,
    };

    this.handleShowCurrencies = this.handleShowCurrencies.bind(this);
  }

  handleShowCurrencies = (e) => {
    this.setState({
      showCurrencies: e.type === "blur" ? false : !this.state.showCurrencies,
    });
  };

  render() {
    const {
      categoriesData: { categories },
      currenciesData: { currencies },
      items,
      getProductsByCategory,
      currencySymbol,
      changeCurrencySymbol,
      openCart,
    } = this.props;
    return (
      <div className='nav-container'>
        <ul className='nav-items'>
          {categories?.map((category) => (
            <li className={`nav-item`} key={category.name}>
              <NavLink
                to={`/${category.name}`}
                activeClassName={`active-item`}
                onClick={() => getProductsByCategory(category.name)}
              >
                {category.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='logo'>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='logo' />
        </div>
        <div className='nav-actions'>
          <div className='currency-switch' tabIndex={1}>
            <button
              onClick={this.handleShowCurrencies}
              onBlur={this.handleShowCurrencies}
            >
              {currencySymbol}
              <span>
                <img
                  src={`${process.env.PUBLIC_URL}/images/arrow.png`}
                  alt=''
                />
              </span>
            </button>
            {this.state.showCurrencies ? (
              <div className='dropdown'>
                {currencies?.map((currency) => (
                  <div></div>
                  // <div
                  //   key={currency.symbol}
                  //   className={`dropdown-items ${
                  //     currencySymbol === currency.symbol ? "selected" : ""
                  //   }`}
                  //   onClick={() => console.log("-----")}
                  // >
                  //   {/* <button on={() => console.log("------?>>>>>>>")}> */}{" "}
                  //   {`${currency.symbol} ${currency.label}`} {/* </button> */}
                  // </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className='cart-icon' onClick={() => openCart()} tabIndex={"1"}>
            <img src={`${process.env.PUBLIC_URL}/images/cart.png`} alt='' />
            {items.length > 0 ? (
              <div className='badge'>
                <span>
                  {
                    items.reduce(
                      (acc, curr) => ({
                        quantity: acc.quantity + curr.quantity,
                      }),
                      { quantity: 0 }
                    ).quantity
                  }
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySymbol: state.currencySwitcher.symbol,
  items: state.cartItems.items,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    changeCurrencySymbol,
    getProductsByCategory,
    openCart,
  }),
  graphql(getCategories, { name: "categoriesData" }),
  graphql(getCurrencies, { name: "currenciesData" })
)(NavBar);
