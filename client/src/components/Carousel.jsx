import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Wrapper = styled.div`
  width: ${props => props.settings.width}px;
  /* background: #ccc; */
  margin: auto;
  min-height: 164px;
  /* overflow: hidden; */
  position: relative;
`
const Overflow = styled.div`
  width: ${props => props.settings.width}px;
  /* background: #ccc; */
  margin: auto;
  min-height: ${props => props.settings.cardWidth}px;
  overflow: hidden;
  position: relative;
`

const Container = styled.div`
  /* width: 940px; */
  /* background: #ccc; */
  margin: auto;
  /* overflow: hidden; */
  position: relative;
  `;
  /* min-height: ${props => props.settings.cardWidth}px; */

const Track = styled(Container)`
  width: ${props => props.settings.width}px;
  min-height: ${props => props.settings.cardWidth}px;
  display: flex;
  transform: translateX(${props => props.index * props.settings.width * -1}px);
  transition: transform 0.6s;
`
const CardBox = styled(Container)`
  width: ${props => props.cardWidth + 24}px;
  max-width: ${props => props.cardWidth + 24}px;
  flex-shrink: 0;
  height: ${props => props.cardWidth}px;
  max-height: ${props => props.cardWidth}px;
  /* border: 1px solid #aaa; */
  padding: 0px 12px;
  box-sizing: border-box;
`
// height: ${props => props.settings.cardWidth}px;

const Card = styled(CardBox)`
  width: 100%
  height: 100%;
  padding: 0px;
  /* background: blue; */
  /* border: 1px solid #aaa; */
`
const Profile = styled.img`
  width: ${props => props.cardWidth}px;
  height: ${props => props.cardWidth}px;
  object-fit: cover;
  &:hover {
    opacity: 0.5;
  };
`

const Nav = styled.button`
  width: 32px;
  height: 164px;
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
  left: -30px;
  opacity: ${props => (props.index == 0) ? 0.2 : 1};
`
const NavRight = styled(Nav)`
  right: -30px;
  opacity: ${props => (props.max < 1) ? 1 :  0.2};
`
let track;
let carouselWidth;

let source1;

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: "loading",
      index: 0,
      settings: {
        width: (this.props.width) ? this.props.width : 940,
        padding: (this.props.padding) ? this.props.padding : 12,
        rows: (this.props.rows) ? this.props.rows : 5,
        get cardWidth(){return (this.width - (this.padding * this.rows * 2))/5}
        // cardWidth: `${(this.width - this.padding * 2) / 5}px`
      }
    };
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  initSettings() {
    if (this.props.width) {
      setState({settings : {
        width: this.props.width
      }})
    }
  }

  componentDidMount() {
    // track = find(document.body, Track); //did not work
    track = document.getElementById('testTrack');
    // carouselWidth = document.getElementById('testCarousel').offsetWidth;
    // console.log(`CarouselWidth is ${carouselWidth}`);
    // console.log(`Track is ${track}`);
  }



  prevClick() {
    // console.log('fn prevClick has run from Carousel.jsx');
    if (this.state.index > 0) {
      this.setState({index: this.state.index - 1});
    }
  }

  nextClick(){
    // console.log('fn nextClick has run from Carousel.jsx');
    let row = 5; //change when rows are customizable
    let maxIndex = (this.state.index + 1) / Math.ceil(this.props.users.length / row); //check if index has reached end
    if (maxIndex < 1) {
      this.setState({index: this.state.index + 1});
    };
  }

  handleClick(e){
    this.props.onProfileClick(e.target.id);
  }

  render() {
    // {console.log(`This is render props.users` + this.props.users.length)}
    // {console.log(this.props.users)};
    // this.props.users.map(user => {console.log(`User in maps is ${user}`)})
    // this.props.users.map(user => {console.log(user)})
    console.log(`padding is ${this.state.settings.cardWidth}`);
    let maxIndex = (this.state.index + 1) / Math.ceil(this.props.users.length / 5);
    let {padding, cardWidth} = this.state.settings;
    return (
    <Wrapper settings={this.state.settings}>
      <div>'Looks(162)'</div>
      <br />
      <Container id='testCarousel' settings={this.state.settings}>
        <Overflow settings={this.state.settings}>
          <Track id='testTrack' settings={this.state.settings} index={this.state.index}>
            {this.props.users.map(user => (
              <CardBox cardWidth={cardWidth} padding={padding}>
                <Card><Profile src={user.image} id={user.id} onClick={this.handleClick} cardWidth={cardWidth}></Profile></Card>
              </CardBox>
            ))}
          </Track>
        </Overflow>
        <NavLeft onClick={this.prevClick} index={this.state.index}>
          {/* <span className="material-icons">navigate_before</span> */}
          <svg viewBox="0 0 16 32">
            <path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z"></path>
          </svg>
        </NavLeft>
        <NavRight onClick={this.nextClick} max={maxIndex}>
          {/* <span className="material-icons">navigate_next</span> */}
          <svg viewBox="0 0 16 32">
            <path d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z"></path>
          </svg>
        </NavRight>
      </Container>
    </Wrapper>
  )}
}

export default Carousel;