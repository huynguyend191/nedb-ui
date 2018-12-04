import React, { Component } from 'react';
import classes from '../../styles/Style.module.css';
import Axios from 'axios';
class Delete extends Component {
  
  state = {
    result: null,
    loading: false,
    start: 1,
    end: 1
  }
  

  handleDelete = () => {
    this.setState({loading: true});
    Axios.delete('http://localhost:8000/nedb/' + this.state.start + '/' + this.state.end)
    .then(result => {
      console.log(result)
      this.setState({ result: `Take ${result.data.time} ms, deleted: ${result.data.numRemoved}`, loading: false})
    })
    .catch(error => this.setState({loading: false, result: "Something went wrong"}))
  }

  handleStartChange = (event) => {
    this.setState({start: event.target.value})
  }

  handleEndChange = (event) => {
    this.setState({end: event.target.value})
  }


  render() {
    if(this.state.queryData) {

    }
    let data = 'Processing...'
    if(!this.state.loading) {
      data = this.state.result;
    }
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Controller}>
          <div style={{fontWeight: 'bold'}}>Input key</div>
          <div>
            <p>Start:</p>
            <input value={this.state.start} type="number" onChange={this.handleStartChange} />
            <p>End:</p>
            <input value={this.state.end} type="number" onChange={this.handleEndChange} />
            <button className={classes.Button} onClick={this.handleDelete}>Delete by key</button>
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

export default Delete;