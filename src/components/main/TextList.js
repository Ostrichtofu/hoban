import React from "react";

const textList_PROPS = [
  {
    URL: "",
    title: "`상생협력 앞장` 호반건설…상생협력기금 200억원 출연",
    date: "19.11.07",
  },
  {
    URL: "",
    title: "플랜에이치벤처스', 중소벤처기업부 팁스 신규 운영사로 선정",
    date: "19.09.20",
  },
  {
    URL: "",
    title: "호반건설, 시흥시교육청소년재단에 장학기금 1억원 전달",
    date: "19.09.04",
  },
];

function MakeTextList() {
  return textList_PROPS.map((element, listIndex) => (
    <li key={listIndex}>
      <a>
        <h4>{element.title}</h4>
        <time>{element.date}</time>
      </a>
    </li>
  ));
}

function TextList() {
  return <ul>{MakeTextList()}</ul>;
}

export default TextList;
