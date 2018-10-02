import React, { Component } from 'react';
// import HomeHeader from './HomeHeader';
// import HomeHeader from '../header/HomeHeader';
// import SimpleSlider from '../header/SimpleSlider';
import Slideshow from 'react-slidez';

import alvaro from '../../assets/images/alvaro-mendoza-602538-unsplash.jpg';
import aziz from '../../assets/images/aziz-acharki-549137-unsplash.jpg';
import kenny from '../../assets/images/kenny-webster-559402-unsplash.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <Slideshow
          showIndex
          showArrows
          autoplay
          enableKeyboard
          useDotIndex
          slideInterval={5000}
          defaultIndex={1}
          slides={[
            alvaro,
            aziz,
            kenny,
            // '../../assets/images/alvaro-mendoza-602538-unsplash.jpg',
            // '../../assets/images/aziz-acharki-549137-unsplash.jpg',
            // '../../assets/images/kenny-webster-559402-unsplash.jpg'
          ]}
          effect={'fade'}
          height={'100%'}
          width={'100%'}
        />
        
        <h1 style={{textAlign: "center"}}>First 11 Academy Project</h1>
      </div>
    );
  }
}

export default App;
