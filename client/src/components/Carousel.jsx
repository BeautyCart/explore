import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Container = styled.div`
  width: 980px;
  /* background: #ccc; */
  margin: auto;
  min-height: 164px;
  overflow: hidden;
  position: relative;
`;

const Track = styled(Container)`
  width: 940px;
  display: flex;
`
const CardBox = styled(Container)`
  width: 188px;
  flex-shrink: 0;
  height: 164px:
  border: 1px solid #aaa;
  padding: 0px 12px;
  box-sizing: border-box;
`
const Card = styled(CardBox)`
  width: 100%;
  height: 100%;
  /* background: blue; */
  border: 1px solid #aaa;
`
const Nav = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
`
const NavLeft = styled(Nav)`
  left: 10px;
`
const NavRight = styled(Nav)`
  right: 10px;

`
let track;
let carouselWidth;

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: "loading"
    };
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  componentDidMount() {
    // track = find(document.body, Track); //did not work
    track = document.getElementById('testTrack');
    carouselWidth = document.getElementById('testCarousel').offsetWidth;
    console.log(`CarouselWidth is ${carouselWidth}`);
    console.log(`Track is ${track}`);
  }

  prevClick() {
    console.log('fn prevClick has run from Carousel.jsx');
  }

  nextClick(){
    console.log('fn nextClick has run from Carousel.jsx');
    console.log(`nextClick track is ${track}`);
    // track.style.transform = `translateX(-${carouselWidth}px)`;
    track.style.transform = `translateX(-940px)`;
  }

  render() {return (
    <Container id='testCarousel'>
      <Track id='testTrack'>
        {console.log(`this.props.users[0] is ${this.state.users[0]}`)}
        <CardBox>
          <Card>1</Card>
        </CardBox>
        <CardBox>
          <Card>2</Card>
        </CardBox>
        <CardBox>
          <Card>3</Card>
        </CardBox>
        <CardBox>
          <Card>4</Card>
        </CardBox>
        <CardBox>
          <Card>5</Card>
        </CardBox>
        <CardBox>
          <Card>6</Card>
        </CardBox>
        <CardBox>
          <Card>7</Card>
        </CardBox>
        <CardBox>
          <Card>8</Card>
        </CardBox>
        <CardBox>
          <Card>9</Card>
        </CardBox>
      </Track>
      <NavLeft onClick={this.prevClick}>
        <span class="material-icons">navigate_before</span>
      </NavLeft>
      <NavRight onClick={this.nextClick}>
        <span class="material-icons">navigate_next</span>
      </NavRight>
    </Container>
  )}
}

export default Carousel;