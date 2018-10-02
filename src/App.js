import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomeHeader></HomeHeader> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="#/@"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1 style={{textAlign: "center"}}>First 11 Academy Project</h1>
      </div>
    );
  }
}

export default App;
