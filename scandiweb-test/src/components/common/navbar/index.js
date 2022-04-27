import { Component } from "react";
import "./styles/index.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='nav-container'>
        <ul className='nav-items'>
          <li className='nav-item'>
            <a href='/#'>ALL</a>
          </li>
          <li className='nav-item'>
            <a href='/#'>CLOTHES</a>
          </li>
          <li className='nav-item'>
            <a href='/#'>TECH</a>
          </li>
        </ul>
        <div className='logo'>
          <img src='./images/logo.png' alt='logo' />
        </div>
        <div className='nav-actions'>
          <div className='currency-switch'>
            $
            <span>
              <img src='./images/arrow.png' alt='' />
            </span>
            <div className='dropdown'>
              <div className='dropdown-items'>1</div>
              <div className='dropdown-items'>2</div>
            </div>
          </div>
          <div className='cart-icon'>
            <img src='./images/cart.png' alt='' />
          </div>
          <div className='badge'>
            <span>3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
