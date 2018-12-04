import React, { Component } from 'react';
import './App.css';
import NeDBLogo from './assets/NeDB.jpg';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <img className="NavLogo" src={NeDBLogo} alt="" />
        </div>
        <Dashboard />
      </div>
    );
  }
}
export default App;
