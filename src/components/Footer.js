import React from "react";
import "../scss/Footer.scss";

const siteMap_PROPS = {
  left: [
    {
      title: "회사소개",
      subMenus: ["기업이념", "기업연혁", "CEO인사말", "그룹사현황", "오시는길"],
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
    },
    {
      title: "지속가능경영",
      subMenus: ["윤리경영소개", "윤리경영활동", "사이버신문고", "동반성장"],
    },
    {
      title: "사회공헌",
      subMenus: ["호반사랑나눔", "호반공익법인"],
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
    },
    {
      title: "인재채용",
      subMenus: ["인사도", "복리후생", "채용가이드", "채용공고", "채용문의"],
    },
  ],
  right: [
    {
      button: "호반베르디움",
      URL: "",
    },
    {
      button: "30주년 홍보관",
      URL: "",
    },
    {
      button: "분양정보",
      URL: "",
    },
    {
      button: "FAMILY SITE",
      URL: "",
    },
  ],
};

const info_PROPS = {
  left: [
    {
      button: "이용약관",
      URL: "",
    },
    {
      button: "이메일주소무단수집거부",
      URL: "",
    },
    {
      button: "개인정보취급방침",
      URL: "",
    },
    {
      button: "영상정보처리기기 운영 · 관리방침",
      URL: "",
    },
  ],
  right: [
    {
      button: "하도급거래 공정화 4대 가이드라인",
      URL: "",
    },
    {
      button: "전자조달 시스템",
      URL: "",
    },
  ],
};

function Footer() {
  const renderFooterMenus = (contentsArr) => {
    return contentsArr.map((element, footerMenuIndex) => (
      <li key={footerMenuIndex}>
        <h5>{element.title}</h5>
        <ul>{renderSubMenus(element.subMenus, footerMenuIndex)}</ul>
      </li>
    ));
  };

  const renderSubMenus = (subMenus, footerMenuIndex) => {
    return subMenus.map((subMenu, subMenuIndex) => {
      return (
        <li key={footerMenuIndex * 10 + subMenuIndex}>
          <a>{subMenu}</a>
        </li>
      );
    });
  };

  function MakeButton(buttonBoxs) {
    return buttonBoxs.map((element, boxIndex) => (
      <li key={boxIndex}>
        <a>{element.button}</a>
      </li>
    ));
  }

  return (
    <footer className="footer">
      <div className="sitemap">
        <ul className="map">{renderFooterMenus(siteMap_PROPS.left)}</ul>
        <ul className="button">{MakeButton(siteMap_PROPS.right)}</ul>
      </div>
      <div className="info">
        <div>
          <h1>호반건설</h1>
          <ul className="corporation">{MakeButton(info_PROPS.left)}</ul>
          <ul className="button">{MakeButton(info_PROPS.right)}</ul>
          <address>
            (06768) 서울시 서초구 양재대로2길 18 호반파크 2관(우면동 786)
            <br />
            분양문의: 1588-9798 / TEL 02-6177-0000, FAX 02-6177-0010
          </address>
          <p className="copyright">
            COPYRIGHT ⓒ 2017 HOBAN CONSTRUCTION LTD., All RIGHT RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
