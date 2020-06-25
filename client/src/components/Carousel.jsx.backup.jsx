import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Wrapper = styled.div`
  width: 940px;
  /* background: #ccc; */
  margin: auto;
  min-height: 164px;
  /* overflow: hidden; */
  position: relative;
`

const Overflow = styled.div`
  width: 940px;
  /* background: #ccc; */
  margin: auto;
  min-height: 164px;
  overflow: hidden;
  position: relative;
`

const Container = styled.div`
  /* width: 940px; */
  /* background: #ccc; */
  margin: auto;
  min-height: 164px;
  /* overflow: hidden; */
  position: relative;
`;

const Track = styled(Container)`
  width: 940px;
  min-height: 164px;
  display: flex;
  transition: transform 0.6s;
`
const CardBox = styled(Container)`
  width: 188px;
  max-width: 188px;
  flex-shrink: 0;
  height: 164px;
  max-height: 164px:
  border: 1px solid #aaa;
  padding: 0px 12px;
  box-sizing: border-box;
`
const Card = styled(CardBox)`
  width: 100%
  height: 100%;
  padding: 0px;
  /* background: blue; */
  /* border: 1px solid #aaa; */
`
const Profile = styled.img`
  width: 164px;
  height: 164px;
  object-fit: cover;
`

const Nav = styled.button`
  width: 40px;
  height: 40px;
  /* border: 1px solid #ccc; */
  /* border-radius: 50%; */
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* background: #fff; */
  background: none;
`
const NavLeft = styled(Nav)`
  left: -20px;
`
const NavRight = styled(Nav)`
  right: -20px;

`
let track;
let carouselWidth;

let source1;

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: "loading"
    };
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // track = find(document.body, Track); //did not work
    track = document.getElementById('testTrack');
    // carouselWidth = document.getElementById('testCarousel').offsetWidth;
    // console.log(`CarouselWidth is ${carouselWidth}`);
    // console.log(`Track is ${track}`);
  }

  prevClick() {
    console.log('fn prevClick has run from Carousel.jsx');
    track.style.transform = `translateX(0px)`;
  }

  nextClick(){
    console.log('fn nextClick has run from Carousel.jsx');
    console.log(`nextClick track is ${track}`);
    // track.style.transform = `translateX(-${carouselWidth}px)`;
    track.style.transform = `translateX(-940px)`;
  }

  handleClick(e){
    console.log(`handeclick value ${e.target}`);
    console.log(e);
    this.props.onProfileClick(e.target.value);
  }

  render() {
    // {console.log(`This is render props.users` + this.props.users.length)}
    // {console.log(this.props.users)};
    // this.props.users.map(user => {console.log(`User in maps is ${user}`)})
    // this.props.users.map(user => {console.log(user)})
    return (
    <Wrapper>
      <div>'Looks(162)'</div>
      <br />
      <Container id='testCarousel'>
        <Overflow>
          <Track id='testTrack'>
            {/* {console.log(`this.props.users[0] is ${this.state.users[0]}`)} */}
            {this.props.users.map(user => (
              <CardBox>
                <Card><Profile src={user.image} value="hello kitty" onClick={this.handleClick}></Profile></Card>
              </CardBox>
            ))}

            {/* <CardBox>
              <Card><Profile src='https://loremflickr.com/320/240/female,face,model/all'></Profile></Card>
            </CardBox> */}
          </Track>
        </Overflow>
        <NavLeft onClick={this.prevClick}>
          <span className="material-icons">navigate_before</span>
        </NavLeft>
        <NavRight onClick={this.nextClick}>
          <span className="material-icons">navigate_next</span>
        </NavRight>
      </Container>
    </Wrapper>
  )}

  // render() {
  //   {console.log(this.props.users)};
  //   return (
  //   <Wrapper>
  //     <div>'Looks(162)'</div>
  //     <br />
  //     <Container id='testCarousel'>
  //       <Track id='testTrack'>
  //         {/* {console.log(`this.props.users[0] is ${this.state.users[0]}`)} */}
  //         <CardBox>
  //           <Card>1</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>2</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>3</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>4</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>5</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>6</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>7</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>8</Card>
  //         </CardBox>
  //         <CardBox>
  //           <Card>9</Card>
  //         </CardBox>
  //       </Track>
  //       <NavLeft onClick={this.prevClick}>
  //         <span class="material-icons">navigate_before</span>
  //       </NavLeft>
  //       <NavRight onClick={this.nextClick}>
  //         <span class="material-icons">navigate_next</span>
  //       </NavRight>
  //     </Container>
  //   </Wrapper>
  // )}
}

export default Carousel;