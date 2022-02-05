import classNames from "classnames";
import React from "react";
import Slider from "react-slick";

const swiper_PROPS = [
  {
    title: "주택사업",
    graphicLink:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/bsn_icn_1.png",
    URL: "",
  },
  {
    title: "건축사업",
    graphicLink:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/bsn_icn_2.png",
    URL: " ",
  },
  {
    title: "토목사업",
    graphicLink:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/bsn_icn_3.png",
    URL: " ",
  },
  {
    title: "임대사업",
    graphicLink:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/bsn_icn_4.png",
    URL: " ",
  },
  {
    title: "금융투자업",
    graphicLink:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/bsn_icn_5.png",
    URL: " ",
  },
  {
    title: "스포츠레저",
    graphicLink:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/bsn_icn_6.png",
    URL: " ",
  },
  {
    title: "방송미디어",
    graphicLink:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/bsn_icn_7.png",
    URL: " ",
  },
];

function ListSwiper() {
  function makeSwiperChildren(swiperArr) {
    return swiperArr.map((element, swiperIndex) => (
      <a href={element.URL} key={swiperIndex} className="businessListContents">
        <h4>{element.title}</h4>
        <img src={element.graphicLink} />
      </a>
    ));
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        setting: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className={classNames("swiper-container", "businessList")}>
      <div className={classNames("swiper-wrapper")}>
        <Slider {...settings} className="swiper-slide">
          {makeSwiperChildren(swiper_PROPS)}
        </Slider>
      </div>
    </div>
  );
}

export default ListSwiper;
