import React, { Component } from 'react';
// import HomeHeader from './HomeHeader';
import HomeHeader from '../header/HomeHeader';
// import SimpleSlider from '../header/SimpleSlider';
import Slideshow from 'react-slidez';

import alvaro from '../../assets/images/alvaro-mendoza-602538-unsplash.jpg';
import aziz from '../../assets/images/aziz-acharki-549137-unsplash.jpg';
import kenny from '../../assets/images/kenny-webster-559402-unsplash.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <HomeHeader/>
        

        <div style={{height: '60vh', zIndex: 9999}}>
          <h1 style={{textAlign: "center"}}>First 11 Academy Project</h1>
        </div>
        
      
        
      </div>
    );
  }
}

export default App;
