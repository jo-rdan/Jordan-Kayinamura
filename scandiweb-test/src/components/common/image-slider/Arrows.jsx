import React, { Component } from 'react'
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../../../redux/actions/cart/cartActions';


class Arrows extends Component {



  render() {
    return (
      <div className='arrows'>
        <div className='left' onClick={() => this.props.prevImage(this.props.data)}>&lt;</div>
        <div className='right' onClick={() => this.props.nextImage(this.props.data)}>&gt;</div>
      </div>
    )
  }
}

export default connect(null, { prevImage, nextImage })(Arrows);