import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel.jsx'

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
  margin: 40px auto auto auto;
  background: white;
  border: 1px solid #ccc;
  /* box-sizing: border-box; */
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  border-bottom: 1px solid #ccc;
`
const Close = styled.button`
  width: 32px;
  height: 32px;
  button:focus {outline:0;};
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
`
const MainWrap = styled.div`
  width: 913px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #eee;
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
const MainImg = styled.img`
  max-width: 420px;
  object-fit: cover;
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
  font-family: "helvetica neue",helvetica,arial,sans-serif;
  font-size: 14px;
  font-weight: 700;
`
const HeaderTitle = styled(InfoHeader)`
  font-size: 16px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
`

const InfoGroupTime = styled.div`
  padding: 10px 0px;
  font-family: "helvetica neue",helvetica,arial,sans-serif;
  color: rgb(117, 117, 117);
  font-size: 12px;
  font-weight: 400;
`
const GroupText = styled.span`
  font-weight: 700;
`

const HashtagContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`
const Hashtags = styled.span`
  color: #1470f5;
`

const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
`
const Avatar = styled.div`

`
const Username = styled.div`
  font-family: "helvetica neue",helvetica,arial,sans-serif;
  font-size: 12px;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
  }
`
const Badge = styled.img`
  height: 15px;
  max-height: 15px;
  object-fit: contain;
  padding: 1px 2px;
`

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const BadgeContainer = styled.div`
  display: flex;
  padding: 5px 0px;
  flex-direction: row;
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.p`
  text-align: center;
  margin: 30px auto;
  font-family: georgia, times, serif;
  font-size: 24px;
  font-weight: 200;
  line-height: 1;

`
let prodImages = [
  'https://sephjen.s3-us-west-1.amazonaws.com/sephora1.jpg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sephora2.jpg',
  'https://sephjen.s3-us-west-1.amazonaws.com/Sephora3.jpg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sophora4.jpeg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sephora5.jpg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sophora6.jpeg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sephora7.jpg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sephora8.jpeg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sephora9.jpeg',
  'https://sephjen.s3-us-west-1.amazonaws.com/sephora10.webp'
];

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'}
      ]
    };

    this.greyOnClose = this.greyOnClose.bind(this);
    this.getProds = this.getProds.bind(this);
  }

  greyOnClose(e) {
    if (e.target.id == 'grey') {
      this.props.onClose();
    }
  };

  getProds() {
    let prods = [...prodImages];
    let newUsers = [];
    for (var i = 0; i < 7; i++) {
      let index = Math.floor(Math.random() * (prods.length)) + 0;
      console.log(`index is ${index}`);
      let prod = prods[index];
      prods.splice(index, 1);
      console.log(`prod is ${prod}`)
      newUsers.push({id: '', image: prod})
    }
    return newUsers;
  }

  componentDidMount() {
    let newState = this.getProds();
    this.setState({'users': newState})
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <Wrapper id='grey' onClick={this.greyOnClose}>
        <Container>
          {/* <div>{this.props.children}</div> */}
          <Header>
            <HeaderTitle>Photo info</HeaderTitle>
            <Close value='A value' onClick={this.props.onClose}>
              <svg viewBox="0 0 20 20">
                <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
              </svg>
            </Close>
          </Header>
          <MainWrap>
            <MainPane>
              <MainImg src={this.props.user.mainImg}></MainImg>
            </MainPane>
            <MainInfo>
              <InfoWrap>
                <InfoHeader>{this.props.user.title}
                </InfoHeader>
                <InfoGroupTime>in <GroupText>{this.props.user.category}</GroupText> | {this.props.user.time}</InfoGroupTime>
                <HashtagContainer>
                  {this.props.user.hashtags && (<Hashtags>{this.props.user.hashtags.map(hash => {return `#${hash} `})}</Hashtags>)} {/*value to hashtags*/}
                </HashtagContainer>
              </InfoWrap>
              <UserWrap>
                <Avatar></Avatar>
                <UserInfo>
                  <Username>{this.props.user.username}</Username>
                  <BadgeContainer>
                    <Badge src={(this.props.user.ranks) ? this.props.user.ranks[0] : ''} />
                    <Badge src={(this.props.user.ranks) ? this.props.user.ranks[1] : ''} />
                  </BadgeContainer>
                </UserInfo>
              </UserWrap>
            </MainInfo>
          </MainWrap>
          <Title>Shop This Look</Title>
          <Carousel items={this.state.users} width={600} rows={4} showPages={true}/>
        </Container>
      </Wrapper>
  )}
}

export default Modal