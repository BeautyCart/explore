import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: "loading"
    };
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  render() {

  }
}

export default CarouselTrack;