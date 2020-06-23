import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './components/Carousel.jsx';

const axios = require('axios');

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

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users: []
    }

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    axios.get('/explore')
    .then((res) => {
      let userData = getUserBasic(res.data);
      this.setState({users: userData});
      console.log(`index.jsx userdata is ${userData}`);
    })
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <h2>Explore This Product</h2>
        <div>
          <div>Looks bar</div>
          <div>
            <Carousel users={this.state.users} />
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("main"));