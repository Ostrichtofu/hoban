import React from "react";

const imageList_PROPS = [
  {
    URL: "",
    title: "마음을 다해 온 호반의 30년",
    image: "BG",
    desc: "",
  },
  {
    URL: "",
    title: "호반장학재단",
    image: "BG",
    desc: "지난 20년간 약 7,600여명의 학생들의 꿈이 비상할 수 있도록 현재까지 총 129억 원의 장학금을 지원하고 있습니다.",
  },
  {
    URL: "",
    title: "TBM",
    image: "BG",
    desc: "TBM(최신 터널 굴착공법)은 무진동·무발파의 기계화 굴착공법으로 친환경적인 공법입니다.",
  },
  {
    URL: "",
    title: "서초 신사옥 현장 미리보기",
    image: "BG",
    desc: "",
  },
];

function MakeImageList() {
  return imageList_PROPS.map((element, listIndex) => (
    <li key={listIndex}>
      <h4>{element.title}</h4>
      <div>
        <a>{element.image}</a>
      </div>
      <p>{element.desc}</p>
    </li>
  ));
}

function ImageList() {
  return <ul>{MakeImageList()}</ul>;
}

export default ImageList;
