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

// let defaultUsers = [
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
//   {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'}
// ];

class App extends React.Component{
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
    axios.get('/explore')
    .then((res) => {
      let userData = getUserBasic(res.data);
      this.setState({users: userData});
    })
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
      axios.get(`/user/${e}`)
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

export default App;