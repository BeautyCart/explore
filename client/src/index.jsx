import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

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
            Carousel
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("main"));
