import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import "./App.scss";
import "./scss/Reset.css";

import MainSlider from "./components/Slider";
import Header from "./components/Header";
import ContentsBox from "./components/ContentsBox";

function App() {
  return (
    <div>
      <Header />
      <MainSlider />
      <div className="mainContents">
        {ContentsBox}
      </div>
    </div>
  );
}
export default App;
