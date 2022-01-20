import React from "react";
import Slider from "react-slick";

const swiper_PROPS = [
  {
    title: "주택사업",
    graphicLink: " ",
    URL: " ",
  },
  {
    title: "건축사업",
    graphicLink: " ",
    URL: " ",
  },
  {
    title: "토목사업",
    graphicLink: " ",
    URL: " ",
  },
  {
    title: "임대사업",
    graphicLink: " ",
    URL: " ",
  },
  {
    title: "금융투자업",
    graphicLink: " ",
    URL: " ",
  },
  {
    title: "스포츠레저",
    graphicLink: " ",
    URL: " ",
  },
  {
    title: "방송미디어",
    graphicLink: " ",
    URL: " ",
  },
];

function ListSwiper() {
  function makeSwiperChildren(swiperArr) {
    return swiperArr.map((element, swiperIndex) => (
      <li key={swiperIndex}>
        <a href={element.URL}>
          <h4>{element.title}</h4>
          <img></img>
        </a>
      </li>
    ));
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="swiper-wrapper">
      <Slider {...settings} className="swiper-slide">
        {makeSwiperChildren(swiper_PROPS)}
      </Slider>
    </div>
  );
}

export default ListSwiper;
