import React from "react";
import Slider from "react-slick";

const silder_PROPS = [
  {
    category: "HOBAN GROUP",
    mainTitle: "Innovation",
    subTitle: "고객만족을 넘어 고객가치를 꿈꾸는 기업, HOBAN",
  },
  {
    category: "HOBAN SUMMIT & VERTIUM",
    mainTitle: "Professional",
    subTitle:
      "전문가가 만드는 더 특별한 행복 호반의 명작, 호반 써밋 & 베르디움",
  },
  {
    category: "AVENUE FRANCE",
    mainTitle: "Enjoy",
    subTitle:
      "도심속에서 만나는 프랑스의 감성과 자유로움, 유럽형 복합문화공간 아브뉴프랑",
  },
  {
    category: "HOBAN GOLF",
    mainTitle: "Healing",
    subTitle:
      "자연과 하나되는 휴식과 즐거움, 당신의 몸과 마음의 여유를 느껴보세요",
  },
  {
    category: "SOCIAL CONTRIBUTION",
    mainTitle: "Partner for Happiness",
    subTitle: "더불어 사는 행복한 세상, 나누며 커가는 행복한 미래",
  },
];

function MainSlider() {
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

  // function makeSliderChildren(){
  //   let retval = [];
  //   for (let i = 0; i <5; ++i) {
  //     retval.push(
  //       <div key={i * Math.random()}>
  //         <h2></h2>
  //       </div>
  //     );
  //   }

  //   return retval;
  // }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="swiper-wrapper">
      <Slider {...settings} className="swiper-slide">
        {makeSliderChildren(silder_PROPS)}
      </Slider>
    </div>
  );
}

export default MainSlider;
