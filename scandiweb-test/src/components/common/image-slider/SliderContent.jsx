import React, { Component } from 'react'

class SliderContent extends Component {
  render() {

    return (
      <>
        {this.props.content.gallery.map((image, index) => {
          return <img src={image} alt="" key={index} style={{ display: index === this.props.active ? 'flex' : 'none' }} />
        })}
      </>
    )
  }
}

export default SliderContent;