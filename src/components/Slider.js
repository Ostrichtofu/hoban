// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.count = props.count;
//   }

//   makeSliderChildren() {
//     let retval = [];
//     for (let i = 0; i < this.count; ++i) {
//       retval.push(
//         <div>
//           <h3>{i + 1}</h3>
//         </div>
//       );
//     }

//     return retval;
//   }

//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };

//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>{this.makeSliderChildren()}</Slider>
//       </div>
//     );
//   }
// }

import React from "react";
import Slider from "react-slick";
import makeSliderChildren from "./SliderChildren.js";

function SimpleSlider(){
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
        <Slider {...settings}></Slider>
      </div>
    );
  }

export default SimpleSlider;
