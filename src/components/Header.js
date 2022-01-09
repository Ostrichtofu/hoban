import React from "react";
import "../scss/Header.scss";

const contents_PROPS = {
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
  ],
  right: [
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
    {
      title: "강아지",
      subMenus: ["말티즈", "비숑", "포메", "치와와", "코카스파니엘"],
    },
  ],
};

function Header() {
  /*function contentsSubList() {
    if (contents_PROPS.index[0]) {
      return contents_PROPS.Left.map((element) => {
        return (
          <li key={element.subMenus.length}>
            <a>{element.subMenus}</a>
          </li>
        );
      })
    }
    return contents_PROPS.Right.map((element) => {
      return (
        <li key={element.subMenus.length}>
          <a>{element.subMenus}</a>
        </li>
      );
    });
  }*/

  /*function contentsList() {
    if (contents_PROPS.index[0]) {
      return contents_PROPS.Left.map((element, index) => {
        return (
          <li className="nav-list" key={index}>
            <a className="nav-list-title">{element.title}</a>
            <ul className="nav-list-subgroup">{contentsSubList()}</ul>
          </li>
        );
      });
    }
    return contents_PROPS.Right.map((element, index) => {
      return (
        <li className="nav-list" key={index}>
          <a className="nav-list-title">{element.title}</a>
          <ul className="nav-list-subgroup">{contentsSubList()}</ul>
        </li>
      );
    });
  }*/

  function renderMenu(contentsArr) {
    return contentsArr.map((element, contentIndex) => (
      //메뉴 종류에 대한 순환
      <li className="nav-list" key={contentIndex}>
        <a className="nav-list-title">{element.title}</a>
        <ul className="nav-list-subgroup">
          {element.subMenus.map((subMenu, subMenuIndex) => {
            //세부 메뉴에 대한 순환
            return (
              <li key={contentIndex * 10 + subMenuIndex}>
                <a>{subMenu}</a>
              </li>
            );
          })}
        </ul>
      </li>
    ));
  }

  const renderMainMenus = (contentsArr) => {
    return contentsArr.map((element, mainMenuIndex) => (
      <li className="nav-list" key={mainMenuIndex}>
        <a className="nav-list-title">{element.title}</a>
        <ul className="nav-list-subgroup">
          {renderSubMenus(element.subMenus, mainMenuIndex)}
        </ul>
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
          <a>호반건설</a>
        </h1>
        <ul className="nav-group-1">{renderMainMenus(contents_PROPS.left)}</ul>
        <ul className="nav-group-2">{renderMainMenus(contents_PROPS.right)}</ul>
      </nav>
    </header>
  );

  //   {/* <ul className="nav-group-1">{leftContentsList()}</ul>
  // <ul className="nav-group-2">{rightContentsList()}</ul> */}

  //   // return (
  //   //   <header className="header">
  //   //     <nav className="nav">
  //   //       <h1>
  //   //         <a>호반건설</a>
  //   //       </h1>
  //   //       <ul className="nav-group-1">
  //   //         <li className="nav-list">
  //   //           <a className="nav-list-title">회사소개</a>
  //   //           <ul className="nav-list-subgroup">
  //   //             <li>
  //   //               <a>기업이념</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>기업연혁</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>CEO인사말</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>그룹사현황</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>오시는길</a>
  //   //             </li>
  //   //           </ul>
  //   //         </li>
  //   //         <li className="nav-list">
  //   //           <a className="nav-list-title">사업영역</a>
  //   //           <ul className="nav-list-subgroup">
  //   //             <li>
  //   //               <a>주택사업</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>건축사업</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>토목사업</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>임대사업</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>금융두자업</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>스포츠레저</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>방송미디어</a>
  //   //             </li>
  //   //           </ul>
  //   //         </li>
  //   //         <li className="nav-list">
  //   //           <a className="nav-list-title">지속가능경영</a>
  //   //           <ul className="nav-list-subgroup">
  //   //             <li>
  //   //               <a>윤리경영소개</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>윤리경영활동</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>사이버신문고</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>동반성장</a>
  //   //             </li>
  //   //           </ul>
  //   //         </li>
  //   //       </ul>
  //   //       <ul className="nav-group-2">
  //   //         <li className="nav-list">
  //   //           <a className="nav-list-title">사회공헌</a>
  //   //           <ul className="nav-list-subgroup">
  //   //             <li>
  //   //               <a>호반사랑나눔</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>호반공익법인</a>
  //   //             </li>
  //   //           </ul>
  //   //         </li>
  //   //         <li className="nav-list">
  //   //           <a className="nav-list-title">홍보센터</a>
  //   //           <ul className="nav-list-subgroup">
  //   //             <li>
  //   //               <a>NEWS</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>홍보자료실</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>CI / BI</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>수상실적</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>신사옥홍보관</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>30주년홍보관</a>
  //   //             </li>
  //   //           </ul>
  //   //         </li>
  //   //         <li className="nav-list">
  //   //           <a className="nav-list-title">인재채용</a>
  //   //           <ul className="nav-list-subgroup">
  //   //             <li>
  //   //               <a>인사제도</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>복리후생</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>채용가이드</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>채용공고</a>
  //   //             </li>
  //   //             <li>
  //   //               <a>채용문의</a>
  //   //             </li>
  //   //           </ul>
  //   //         </li>
  //   //       </ul>
  //   //     </nav>
  //   //   </header>
  //   // );
}

export default Header;
