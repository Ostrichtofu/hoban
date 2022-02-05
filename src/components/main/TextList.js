import React from "react";

const textList_PROPS = [
  {
    URL: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A201911060440&t=KO",
    image:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/news_img_1.jpg",
    title: "`상생협력 앞장` 호반건설…상생협력기금 200억원 출연",
    date: "19.11.07",
  },
  {
    URL: "https://news.mtn.co.kr/news-detail/?v=2019092010273912901",
    image:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/news_img_2.jpg",
    title: "플랜에이치벤처스', 중소벤처기업부 팁스 신규 운영사로 선정",
    date: "19.09.20",
  },
  {
    URL: "https://www.mk.co.kr/news/realestate/view/2019/09/692780/",
    image:
      "https://raw.githubusercontent.com/Ostrichtofu/Images/master/hoban/news_img_3.jpg",
    title: "호반건설, 시흥시교육청소년재단에 장학기금 1억원 전달",
    date: "19.09.04",
  },
];

function MakeTextList() {
  return textList_PROPS.map((element, listIndex) => (
    <li key={listIndex} className="newsListContents">
      <a href={element.URL}>
        <img src={element.image} />
        <h4>{element.title}</h4>
        <time>{element.date}</time>
      </a>
    </li>
  ));
}

function TextList() {
  return <ul className="newsList">{MakeTextList()}</ul>;
}

export default TextList;
