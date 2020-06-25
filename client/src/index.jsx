import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Carousel from './components/Carousel.jsx';
import Modal from './components/Modal.jsx';

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

let defaultUsers = [
  {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
  {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
  {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
  {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'},
  {id: '', image: 'https://loremflickr.com/320/240/female,face,model/all'}
];

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users: defaultUsers,
      show: false
    }

    this.showModal = this.showModal.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  getUsers() {
    axios.get('/explore')
    .then((res) => {
      let userData = getUserBasic(res.data);
      this.setState({users: userData});
      console.log(`index.jsx userdata is ${userData}`);
      console.log(userData);
    })
  }

  showModal(e) {
    this.setState({
      show: !this.state.show
    })
  }

  onClose(e) {
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
            <Carousel users={this.state.users} />
          </div>
        </div>
        <button onClick={ e => {this.showModal()}}>Modal Test</button>
        <Modal show={this.state.show} onClose={this.showModal}>Hello Modal!</Modal>
      </Temp>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("main"));