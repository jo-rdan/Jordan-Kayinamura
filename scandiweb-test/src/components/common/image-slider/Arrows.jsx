import React, { Component } from 'react'
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../../../redux/actions/cart/cartActions';


class Arrows extends Component {



  render() {
    const { data, prevImage, nextImage } = this.props;
    return (
      <div className='arrows'>
        <div className='left' onClick={() => prevImage(data)}>&lt;</div>
        <div className='right' onClick={() => nextImage(data)}>&gt;</div>
      </div>
    )
  }
}

export default connect(null, { prevImage, nextImage })(Arrows);