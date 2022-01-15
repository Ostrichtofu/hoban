import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import "./App.scss";
import "./scss/Reset.css";

import Header from "./components/Header";
import MainSlider from "./components/main/MainSlider";
import Contents from "./components/main/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainSlider />
      <Contents />
      <Footer />
    </div>
  );
}
export default App;
