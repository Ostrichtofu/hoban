import React, { useState } from "react";
import "../scss/Header.scss";
import classnames from "classnames";

const contents_PROPS = [
  {
    title: "회사소개",
    subMenus: ["기업이념", "기업연혁", "CEO인사말", "그룹사현황", "오시는길"],
    URL: "#",
  },
  {
    title: "사업영역",
    subMenus: [
      "주택사업",
      "건축사업",
      "토목사업",
      "임대사업",
      "금융투자업",
      "스포츠레저",
      "방송미디어",
    ],
    URL: "#",
  },
  {
    title: "지속가능경영",
    subMenus: ["윤리경영소개", "윤리경영활동", "사이버신문고", "동반성장"],
    URL: "#",
  },
  {
    title: "사회공헌",
    subMenus: ["호반사랑나눔", "호반공익법인"],
    URL: "#",
  },
  {
    title: "홍보센터",
    subMenus: [
      "NEWS",
      "홍보자료실",
      "CI / BI",
      "수상실적",
      "신사옥홍보관",
      "30주년홍보관",
    ],
    URL: "#",
  },
  {
    title: "인재채용",
    subMenus: ["인사도", "복리후생", "채용가이드", "채용공고", "채용문의"],
    URL: "#",
  },
];

function Header() {
  const renderMainMenus = (contentsArr) => {
    return contentsArr.map((element, mainMenuIndex) => (
      <li className="nav-list" key={mainMenuIndex}>
        <a className="nav-list-title" href={element.URL}>
          {element.title}
        </a>
      </li>
    ));
  };

  const renderSubMenus = (subMenus, mainMenuIndex) => {
    return subMenus.map((subMenu, subMenuIndex) => {
      //세부 메뉴에 대한 순환
      return (
        <li key={mainMenuIndex * 10 + subMenuIndex}>
          <a>{subMenu}</a>
        </li>
      );
    });
  };

  return (
    <header className="header">
      <nav className="nav">
        <h1>
          <a href="#">호반건설</a>
        </h1>
        <ul className="nav-group">{renderMainMenus(contents_PROPS)}</ul>
        <a className="searchBtn">
          <span>검색</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
