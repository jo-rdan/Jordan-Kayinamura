import { Component } from "react";
import { NavLink } from "react-router-dom";
import { graphql } from "react-apollo";
import { compose } from "redux";
import { changeCurrencySymbol } from "../../../redux/actions/currency-switcher/currencySwitcher";
import { getProductsByCategory } from "../../../redux/actions/products-actions/productsActions";
import { getCategories, getCurrencies } from "./utils/queries";
import { connect } from "react-redux";
import "./styles/index.css";

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
    return (
      <div className='nav-container'>
        <ul className='nav-items'>
          {this.props.categoriesData?.categories?.map((category) => (
            <li className={`nav-item`} key={category.name}>
              <NavLink
                exact={true}
                to={`/${category.name}`}
                activeStyle={{
                  borderBottom: "2px solid #5ECE7B",
                  color: "#5ECE7B",
                }}
                onClick={() => this.props.getProductsByCategory(category.name)}
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
          <div
            className='currency-switch'
            onClick={this.handleShowCurrencies}
            onBlur={this.handleShowCurrencies}
            tabIndex='1'
          >
            {this.props.currencySymbol}
            <span>
              <img src={`${process.env.PUBLIC_URL}/images/arrow.png`} alt='' />
            </span>
            {this.state.showCurrencies ? (
              <div className='dropdown' ref='currency-dpd'>
                {this.props.currenciesData?.currencies?.map((currency) => (
                  <div
                    key={currency.symbol}
                    className={"dropdown-items"}
                    onClick={() =>
                      this.props.changeCurrencySymbol(currency.symbol)
                    }
                  >{`${currency.symbol} ${currency.label}`}</div>
                ))}
              </div>
            ) : null}
          </div>
          <div className='cart-icon'>
            <img src={`${process.env.PUBLIC_URL}/images/cart.png`} alt='' />
            <div className='badge'>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySymbol: state.currencySwitcher.symbol,
});

export default compose(
  connect(mapStateToProps, { changeCurrencySymbol, getProductsByCategory }),
  graphql(getCategories, { name: "categoriesData" }),
  graphql(getCurrencies, { name: "currenciesData" })
)(NavBar);
