import React, { Component } from 'react';
import Axios from 'axios';
import classes from '../../styles/Style.module.css';
import ReactJson from 'react-json-view';

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
          <div style={{fontSize: '13px'}}>
            Random create object, example: <br />
            <ReactJson src={{"k":1,"c":"0935211958","name":{"c":"5731334827"},"_id":"HjnepvzNM8Dz2Emv"}} theme="monokai" />
          </div>
        </div>
        <div>
          <div style={{fontWeight: 'bold', margin: '30px'}}>Result:</div>          
          <div className={classes.Result}>{data}</div>
        </div>
      </div>
    );
  }
}

export default Insert;