import React from "react";

const boxContents_PROPS = [
  {
    title: "고객센터",
    icon: "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/otr_icn_1.png",
    desc: "고객님의 궁금하신 사항을 해결해드리겠습니다",
    button: "상담하기",
    URL: "",
  },
  {
    title: "인재채용",
    icon: "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/otr_icn_2.png",
    desc: "호반건설과 성장을 함께 할 열정적인 인재를 찾습니다",
    button: "알아보기",
    URL: "",
  },
];

function MakeBoxContents() {
  return boxContents_PROPS.map((element, boxIndex) => (
    <div className="service" key={boxIndex}>
      <h3>{element.title}</h3>
      <img src={element.icon} />
      <p>{element.desc}</p>
      <a>{element.button}</a>
    </div>
  ));
}

function BoxGroup() {
  return <div className="other">{MakeBoxContents()}</div>;
}

export default BoxGroup;
