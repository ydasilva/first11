import React, { Component } from 'react';
import HomeHeader from '../header/HomeHeader';
import Waves from '../../components/waves/Waves';

class App extends Component {
  render() {
    return (
      <div>
        <HomeHeader/>
        <Waves/>
        <div className="grid-container">
          <div className="grid-x">
            <div className="small-12">
              <h1 className="text-center">First 11 Academy Project</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
