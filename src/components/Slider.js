import React, { Component } from "react";
import Slider from "react-slick";

const DEMO_PROPS = [
  {
    url: "www.naver.com",
    img: "https://pstatic.naver.com/어쩌구 저쩌구",
  },
  {
    url: "www.naver2.com",
    img: "https://pstatic.naver2.com/어쩌구 저쩌구2",
  },
];

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.count = props.count;
  }

  makeSliderChildren() {
    return DEMO_PROPS.map((element, index) => {
      return (
        <div key={index}>
          <h3>{element.url}</h3>
          <h3>{element.img}</h3>
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>{this.makeSliderChildren()}</Slider>
      </div>
    );
  }
}
