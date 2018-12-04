import React, { Component } from 'react';
import Axios from 'axios';

class Insert extends Component {

  state = {
    insertOneResult: " ",
    insertOneMillionResult: " ",
  }
  
  insertOne = () => {
    Axios.post('http://localhost:8000/nedb/1')
    .then(result => {
      this.setState({ insertOneResult: `${result.data} ms`})
    })
    .catch(error => console.log(error))
  }

  insertOneMillion = () => {
    Axios.post('http://localhost:8000/nedb/bulk/1000000')
    .then(result => {
      this.setState({ insertOneMillionResult: `${result.data} ms`})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.insertOne}>Insert 1</button>
          <div>{this.state.insertOneResult}</div>
        </div>
        <div>
          <button onClick={this.insertOneMillion}>Insert 1000000</button>
          <div>{this.state.insertOneMillionResult}</div>

        </div>
      </div>
    );
  }
}

export default Insert;