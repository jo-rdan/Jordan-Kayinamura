import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadText,
  changeText,
} from "../../redux/actions/redux-setup/setupActions";

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: "",
    };

    this.onClick = this.onClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.loadText();
  }

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClick = () => {
    this.props.changeText(this.state.newText);
  };

  render() {
    return (
      <div>
        <h1>Redux Setup</h1>
        <h3>Click the button below to change the text</h3>
        <p>{this.props.text}</p>
        <input
          type='text'
          name='newText'
          value={this.state.newText}
          onChange={this.handleInput}
        />
        <button onClick={this.onClick}>Change Text</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.texts.text,
});

export default connect(mapStateToProps, { loadText, changeText })(Setup);
