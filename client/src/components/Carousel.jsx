import React from 'react';

const axios = require('axios');

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      test: "hello"
    }
  }

  render() {return (
    <div>
      Hello Carousel
    </div>

  )}
}

export default Carousel;