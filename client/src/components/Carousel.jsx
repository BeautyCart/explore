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
class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: "loading"
    }
  }

  componentDidMount() {}

  render() {return (
    <Container>
      <Track>
        {console.log(`this.props.users[0] is ${this.state.users[0]}`)}
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
        <CardBox>
          <Card></Card>
        </CardBox>
      </Track>
      <NavLeft>
        <span class="material-icons">navigate_before</span>
      </NavLeft>
      <NavRight>
        <span class="material-icons">navigate_next</span>
      </NavRight>
    </Container>
  )}
}

export default Carousel;