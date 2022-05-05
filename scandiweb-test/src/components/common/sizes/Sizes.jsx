import { Component } from "react";
import './styles/sizes.css'

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='size-options mini-size'>
        <div className='size disabled'>XS</div>
        <div className='size selected'>S</div>
        <div className='size'>M</div>
        <div className='size'>L</div>
      </div>
    )
  }
}

export default Sizes;