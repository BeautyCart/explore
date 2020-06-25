import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: "loading"
    };

    // this.onClose = e => {
    //   this.props.show = false;
    //   console.log(`onClose has run`);
    // };

    // this.function = this.function.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    console.log(`onClose has run`);
    this.props.show = false;
  };

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div>
        <div>{this.props.children}</div>
        <div>
          <button onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
  )}
}

export default Modal