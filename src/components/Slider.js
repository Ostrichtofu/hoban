import React from "react";
import Slider from "react-slick";

function SimpleSlider(){
  
  function makeSliderChildren(){
    let retval = [];
    for (let i = 0; i <6; ++i) {
      retval.push(
        <div key={i * Math.random()}>
          <h3>{i + 1}</h3>
        </div>
      );
    }
    
    return retval;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {makeSliderChildren()}
        </Slider>
      </div>
    );
  }

export default SimpleSlider;
