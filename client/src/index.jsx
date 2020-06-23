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

axios.get('/explore')
.then((res) => {
  console.log(res);
  console.log(getUserBasic(res.data));
})

class App extends React.Component{
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Explore This Product</h2>
        <div>
          <div>Looks bar</div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("main"));