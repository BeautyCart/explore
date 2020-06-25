import React from 'react';
import styled from 'styled-components';

const axios = require('axios');

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* overflow: auto; */
  /* background-color: rgb(0,0,0); */
  background-color: rgba(0,0,0,0.4);
`
const Container = styled.div`
  width: 913px;
  min-height: 600px;
  margin: 10% auto;
  background: white;
  border: 1px solid #ccc;
  /* box-sizing: border-box; */
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  border: 1px solid #ccc;
`
const Close = styled.button`
`
const MainWrap = styled.div`
  width: 913px;
  display: flex;
  flex-direction: row;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const MainPane = styled.div`
  margin: 0;
  display: relative;
  max-width: 460px;
  padding: 20px;
  cursor: auto;
`
const MainImg = styled.div`
  width: 420px;
  height: 500px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
`
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 453px;
  padding: 24px;
`

const InfoWrap = styled.div`
  border-bottom: solid 1px #eee;
  margin-bottom: 10px;
`

const InfoHeader = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: flex-end; */
  font-size: 1.2em;
`
const InfoGroupTime = styled.div`
`
const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
`
const Avatar = styled.div`

`
const Username = styled.div`

`

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const BadgeContainer = styled.div`

`
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`
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
    // this.onClose = this.onClose.bind(this);
  }

  // onClose(e) {
  //   console.log(`onClose has run`);
  //   this.props.show = false;
  // };

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <Wrapper>
        <Container>
          {/* <div>{this.props.children}</div> */}
          <Header>
            <div>Look info</div>
            <Close value='A value' onClick={this.props.onClose}>
              Close
            </Close>
          </Header>
          <MainWrap>
            <MainPane>
              <MainImg></MainImg>
            </MainPane>
            <MainInfo>
              <InfoWrap>
                <InfoHeader> Title goes here

                </InfoHeader>
                <br />
                <InfoGroupTime>From Group | July 4th</InfoGroupTime>
                <span>#tags $tags</span>
              </InfoWrap>
              <UserWrap>
                <Avatar></Avatar>
                <UserInfo>
                  <Username>TestUserName</Username>
                  <BadgeContainer>

                  </BadgeContainer>
                </UserInfo>
              </UserWrap>
            </MainInfo>
          </MainWrap>
        </Container>
      </Wrapper>
  )}
}

export default Modal