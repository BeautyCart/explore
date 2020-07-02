import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';

const axios = require('axios');

const Temp = styled.div`
  margin: auto;
  padding: 10px 10px;
`

const Title = styled.p`
  text-align: center;
  margin: auto;
  padding: 20px 10px;
  font-family: georgia, times, serif;
  font-size: 24px;
  line-height: 1;
`;

const SvgContainer = styled.div`
    background-color: 'lightpink';
    width: 20px;
    height: 20px;
`;

let getUserDetails = (arr) => {
  let users = [];
  // console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    users.push(axios.get(`/explorethis/user/${arr[i]}`)
    .then((res) => {
      let data = res.data[0];
      let obj = {
        'id': data['productId'],
        'image': data['mainImg']
      };
      return obj;
    }))
  };

  return Promise.all(users).then(result => result)
};

let getUserBasic = (res) => {
  let users = [];
  for (var i = 0; i < res.length; i++) {
    users.push({
    'id': res[i]['_id'],
    'image': res[i]['mainImg']
    })
  }
  return users;
}

let getProductId = () => {
  let path = window.location.pathname;
  let productId = path.split('/').filter(split => split !== "").pop();
  return productId;
}

// let defaultUsers = [
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'}
// ];

class ExploreApp extends React.Component{
  constructor() {
    super();
    this.state = {
      users: [
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
        {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'}
      ],
      show: false,
      currentUser: {}
    }

    this.showModal = this.showModal.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
  }

  getUsers() {
    getProductId();
    let productId = getProductId();
    axios.get(`/explorethis/product/${productId}`)
    // .then((res) => console.log(res.data))
    .then((res) => getUserDetails(res.data[0].users))
    .then((res) => this.setState({users: res}))
    // axios.get('/explorethis/explore')
    // .then((res) => {
    //   let userData = getUserBasic(res.data);
    //   this.setState({users: userData});
    // })
  }

  showModal(e) {
    this.setState({
      show: !this.state.show
    })
  }

  onProfileClick(e) {
    let id;
    if (e) {
      this.showModal();
      console.log(`onProfileClick id is ${e}`);
      axios.get(`/explorethis/user/${e}`)
      .then((res) => {
        console.log(res.data[0]);
        this.setState({currentUser: res.data[0]});
      })
    }
  }

  onClose(e) {
    console.log("target value is: " + e.target.value);
    this.props.onClose && this.props.onClose(e);
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <Temp>
        <Title>Explore This Product</Title>
        <div>
          {/* <div>Looks bar</div> */}
          <div>
            <Carousel items={this.state.users} onProfileClick={this.onProfileClick} tabs/>
          </div>
        </div>
        <Modal show={this.state.show} user={this.state.currentUser} onClose={this.showModal}>Hello Modal!</Modal>
      </Temp>
    )
  }
};

export default ExploreApp;