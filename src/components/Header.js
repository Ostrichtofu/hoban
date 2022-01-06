import React, { Component } from "react";
import "../scss/Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1>
          <a>호반건설</a>
        </h1>
        <ul className="nav-group-1">
          <li className="nav-list">
            <a className="nav-list-title">회사소개</a>
            <ul className="nav-list-subgroup">
              <li>
                <a>기업이념</a>
              </li>
              <li>
                <a>기업연혁</a>
              </li>
              <li>
                <a>CEO인사말</a>
              </li>
              <li>
                <a>그룹사현황</a>
              </li>
              <li>
                <a>오시는길</a>
              </li>
            </ul>
          </li>
          <li className="nav-list">
            <a className="nav-list-title">사업영역</a>
            <ul className="nav-list-subgroup">
              <li>
                <a>주택사업</a>
              </li>
              <li>
                <a>건축사업</a>
              </li>
              <li>
                <a>토목사업</a>
              </li>
              <li>
                <a>임대사업</a>
              </li>
              <li>
                <a>금융두자업</a>
              </li>
              <li>
                <a>스포츠레저</a>
              </li>
              <li>
                <a>방송미디어</a>
              </li>
            </ul>
          </li>
          <li className="nav-list">
            <a className="nav-list-title">지속가능경영</a>
            <ul className="nav-list-subgroup">
              <li>
                <a>윤리경영소개</a>
              </li>
              <li>
                <a>윤리경영활동</a>
              </li>
              <li>
                <a>사이버신문고</a>
              </li>
              <li>
                <a>동반성장</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="nav-group-2">
          <li className="nav-list">
            <a className="nav-list-title">사회공헌</a>
            <ul className="nav-list-subgroup">
              <li>
                <a>호반사랑나눔</a>
              </li>
              <li>
                <a>호반공익법인</a>
              </li>
            </ul>
          </li>
          <li className="nav-list">
            <a className="nav-list-title">홍보센터</a>
            <ul className="nav-list-subgroup">
              <li>
                <a>NEWS</a>
              </li>
              <li>
                <a>홍보자료실</a>
              </li>
              <li>
                <a>CI / BI</a>
              </li>
              <li>
                <a>수상실적</a>
              </li>
              <li>
                <a>신사옥홍보관</a>
              </li>
              <li>
                <a>30주년홍보관</a>
              </li>
            </ul>
          </li>
          <li className="nav-list">
            <a className="nav-list-title">인재채용</a>
            <ul className="nav-list-subgroup">
              <li>
                <a>인사제도</a>
              </li>
              <li>
                <a>복리후생</a>
              </li>
              <li>
                <a>채용가이드</a>
              </li>
              <li>
                <a>채용공고</a>
              </li>
              <li>
                <a>채용문의</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
