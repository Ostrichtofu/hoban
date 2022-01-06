import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import "./App.scss";
import "./scss/Reset.css";

import SimpleSlider from "./components/Slider.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div>
      <Header />
      <SimpleSlider count={5} />
    </div>
  );
}
export default App;
