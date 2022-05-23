import React, { Component } from 'react'

class SliderContent extends Component {
  render() {
    const { content: { gallery }, active } = this.props;
    return (
      <>
        {gallery.map((image, index) => {
          return <img src={image} alt="" key={index} style={{ display: index === active ? 'flex' : 'none' }} />
        })}
      </>
    )
  }
}

export default SliderContent;