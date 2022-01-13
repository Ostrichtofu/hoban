import react from "react";

const maincontents_PROPS = [
  {
    contentsTitle: "소개",
    TitleHighlight: "사업",
    contentsSubTitle: "마음을 다하여 행복을 짓습니다",
  },
  {
    contentsTitle: "최신",
    TitleHighlight: "뉴스",
    contentsSubTitle: "호반건설의 새로운 소식을 만나보세요",
  },
  {
    contentsTitle: "이야기",
    TitleHighlight: "호반",
    contentsSubTitle: "지속적인 성장과 소통의 가치를 전합니다",
  },
];

function ContentsTitle() {
  return maincontents_PROPS.map((element, index) => {
    return (
      <div className="contentsTitle">
        <h3>
          <b>{element.TitleHighlight}</b>
          <br />
          {element.contentsTitle}
        </h3>
        <p>{element.contentsSubTitle}</p>
        <a>더보기</a>
      </div>
    );
  });
}

export default ContentsTitle;
