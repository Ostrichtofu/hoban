import React from "react";
import ListSwiper from "./ListSwiper";
import TextList from "./TextList";
import ImageList from "./ImageList";
import BoxGroup from "./BoxGroup";
import "../../../scss/PC/MainContents.scss";

function Contents() {
  const mainContentsTitie_PROPS = {
    one: [
      {
        contentsTitle: "소개",
        titleHighlight: "사업",
        contentsSubTitle: "마음을 다하여 행복을 짓습니다",
      },
    ],
    two: [
      {
        contentsTitle: "뉴스",
        titleHighlight: "최신",
        contentsSubTitle: "호반건설의 새로운 소식을 만나보세요",
      },
    ],
    three: [
      {
        contentsTitle: "이야기",
        titleHighlight: "호반",
        contentsSubTitle: "지속적인 성장과 소통의 가치를 전합니다",
      },
    ],
  };

  function MakeContentsTitle(contentsTitle) {
    return contentsTitle.map((element, contentsIndex) => {
      return (
        <div className="contentsTitle" key={contentsIndex}>
          <h3>
            <b>{element.titleHighlight}</b>
            <br />
            {element.contentsTitle}
          </h3>
          <p>{element.contentsSubTitle}</p>
          <a>더보기</a>
        </div>
      );
    });
  }

  return (
    <div className="contents">
      <div className="business">
        {MakeContentsTitle(mainContentsTitie_PROPS.one)}
        <ListSwiper />
      </div>
      <div className="news">
        <TextList />
        {MakeContentsTitle(mainContentsTitie_PROPS.two)}
      </div>
      <div className="story">
        {MakeContentsTitle(mainContentsTitie_PROPS.three)}
        <ImageList />
      </div>
      <BoxGroup />
    </div>
  );
}

export default Contents;
