import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../scss/MainSlider.scss";

const silder_PROPS = [
  {
    category: "HOBAN GROUP",
    mainTitle: "Innovation",
    subTitle: "고객만족을 넘어 고객가치를 꿈꾸는 기업, HOBAN",
    background: "/static/media/mainBG_1.jpg",
  },
  {
    category: "HOBAN SUMMIT & VERTIUM",
    mainTitle: "Professional",
    subTitle:
      "전문가가 만드는 더 특별한 행복 호반의 명작, 호반 써밋 & 베르디움",
    background: "/static/media/mainBG_2.jpg",
  },
  {
    category: "AVENUE FRANCE",
    mainTitle: "Enjoy",
    subTitle:
      "도심속에서 만나는 프랑스의 감성과 자유로움, 유럽형 복합문화공간 아브뉴프랑",
    background: "/static/media/mainBG_3.jpg",
  },
  {
    category: "HOBAN GOLF",
    mainTitle: "Healing",
    subTitle:
      "자연과 하나되는 휴식과 즐거움, 당신의 몸과 마음의 여유를 느껴보세요",
    background: "/static/media/mainBG_4.jpg",
  },
  {
    category: "SOCIAL CONTRIBUTION",
    mainTitle: "Partner for Happiness",
    subTitle: "더불어 사는 행복한 세상, 나누며 커가는 행복한 미래",
    background: "/static/media/mainBG_5.jpg",
  },
];

function MainSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  function makeSliderChildren(sliderArr) {
    return sliderArr.map((element, sliderIndex) => (
      <div key={sliderIndex}>
        <strong>{element.category}</strong>
        <h2>{element.mainTitle}</h2>
        <p>{element.subTitle}</p>
        <a></a>
      </div>
    ));
  }

  function makeSliderBGChildren(sliderBGArr) {
    return sliderBGArr.map((element, sliderBGIndex) => (
      <div key={sliderBGIndex}>
        <img src={element.background} />
      </div>
    ));
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={classNames("swiper-container", "mainTitle")}>
      <div className="swiper-wrapper">
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={(slider) => setNav1(slider)}
          className="swiper-slide"
        >
          {makeSliderChildren(silder_PROPS)}
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider) => setNav2(slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {makeSliderBGChildren(silder_PROPS)}
        </Slider>
      </div>
    </div>
  );
}

export default MainSlider;
