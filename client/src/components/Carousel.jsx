import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Container = styled.div`
  width: 980px;
  /* background: #ccc; */
  min-height: 164px;
  overflow: hidden;
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
      <Nav>
        <span class="material-icons">navigate_before</span>
      </Nav>
      <Nav>
        <span class="material-icons">navigate_next</span>
      </Nav>
    </Container>
  )}
}

export default Carousel;