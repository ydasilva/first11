import React, { Component } from "react";
// import Slider from "react-slick";
import Slideshow from 'react-slidez';


export default class SimpleSlider extends Component {
  render() {
    const { mySlides } = this.props;
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
          slides={mySlides}
          effect={'fade'}
          height={'100%'}
          width={'100%'}
        >
        <h1 className='hide'>First 11 Academy</h1>
        </Slideshow>
      </div>
    );
  }
}