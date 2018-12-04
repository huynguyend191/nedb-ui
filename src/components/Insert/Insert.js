import React, { Component } from 'react';
import Axios from 'axios';
import classes from './Style.module.css';

class Insert extends Component {

  state = {
    result: null,
    loading: false
  }
  
  insertOne = () => {
    this.setState({loading: true});
    Axios.post('http://localhost:8000/nedb/1')
    .then(result => {
      this.setState({ result: `${result.data} ms`, loading: false})
    })
    .catch(error => this.setState({loading: false, result: "Something went wrong"}))
  }

  insertOneMillion = () => {
    this.setState({loading: true});
    Axios.post('http://localhost:8000/nedb/bulk/1000000')
    .then(result => {
      this.setState({ result: `${result.data} ms`, loading: false})
    })
    .catch(error => this.setState({loading: false, result: "Something went wrong"}))
  }

  render() {
    let data = 'Processing...'
    if(!this.state.loading) {
      data = this.state.result;
    }
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Controller}>
          <div>
            <button className={classes.Button} onClick={this.insertOne}>Insert 1</button>
          </div>
          <div> 
            <button className={classes.Button} onClick={this.insertOneMillion}>Insert 1M</button>
          </div>
        </div>
        <div>
          <div className={classes.Result}>{data}</div>
        </div>
      </div>
    );
  }
}

export default Insert;