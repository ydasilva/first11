import React, { Component } from 'react';
import HomeHeader from '../header/HomeHeader';
import Waves from '../../components/waves/Waves';
import Home from '../../pages/home/Home';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <HomeHeader/>
        <Waves/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
