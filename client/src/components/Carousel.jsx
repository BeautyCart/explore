import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Wrapper = styled.div`
  width: ${props => props.settings.width}px;
  margin: auto;
  min-height: 164px;
  position: relative;
`
const Overflow = styled.div`
  width: ${props => props.settings.width}px;
  margin: auto;
  min-height: ${props => props.settings.cardWidth}px;
  overflow: hidden;
  position: relative;
`
const Container = styled.div`
  margin: auto;
  position: relative;
`

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
  padding: 0px 12px;
  box-sizing: border-box;
`
const Card = styled(CardBox)`
  width: 100%
  height: 100%;
  padding: 0px;
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
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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

const TabsContainer = styled.div`
  text-align: center;
`

const Tabs = styled.div`
  height: 10px;
  width: 10px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  margin: 15px 7.5px 10px;
  opacity: ${props => props.current ? 1 : 0.2};
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
        get cardWidth(){return (this.width - (this.padding * this.rows * 2))/this.rows}
      }
    };
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setPageClick = this.setPageClick.bind(this);
  }

  initSettings() {
    if (this.props.width) {
      setState({settings : {
        width: this.props.width
      }})
    }
  }

  componentDidMount() {
    track = document.getElementById('testTrack');
  }

  setPageClick(page, e) {
    if (page !== this.state.index) {
      this.setState({index: page});
    }
  }

  prevClick() {
    if (this.state.index > 0) {
      this.setState({index: this.state.index - 1});
    }
  }

  nextClick(){
    let row = this.state.settings.rows;
    let maxIndex = (this.state.index + 1) / Math.ceil(this.props.items.length / row); //check if index has reached end
    if (maxIndex < 1) {
      this.setState({index: this.state.index + 1});
    };
  }

  handleClick(e){
    this.props.onProfileClick(e.target.id);
    console.log(`this in handleclick is: ${e.target}`)
  }

  render() {
    let indexAmount = Math.ceil(this.props.items.length / this.state.settings.rows)
    let maxIndex = (this.state.index + 1) / indexAmount;
    let {padding, cardWidth} = this.state.settings;
    let tabs = [];
    for(var i = 0; i < indexAmount; i++) {
      tabs.push(<Tabs value={i} onClick={this.setPageClick.bind(this, i)} current={i == this.state.index}></Tabs>)
    }
    return (
    <Wrapper settings={this.state.settings}>
      <Container id='testCarousel' settings={this.state.settings}>
        <Overflow settings={this.state.settings}>
          <Track id='testTrack' settings={this.state.settings} index={this.state.index}>
            {this.props.items.map(item => (
              <CardBox cardWidth={cardWidth} padding={padding}>
                <Card><Profile src={item.image} id={item.id} onClick={this.handleClick} cardWidth={cardWidth}></Profile></Card>
              </CardBox>
            ))}
          </Track>
        </Overflow>
        <NavLeft onClick={this.prevClick} index={this.state.index}>
          <svg viewBox="0 0 16 32">
            <path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z"></path>
          </svg>
        </NavLeft>
        <NavRight onClick={this.nextClick} max={maxIndex}>
          <svg viewBox="0 0 16 32">
            <path d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z"></path>
          </svg>
        </NavRight>
      </Container>
      {this.props.tabs && <TabsContainer>{tabs}</TabsContainer>}
    </Wrapper>
  )}
}

export default Carousel;