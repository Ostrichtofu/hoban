import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import "./App.scss";
import "./scss/Reset.css";
import MainPage from "./page/PC/mainPage";
import { Route, Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <BrowserRouter>
      <Route exact path="/main" component={MainPage} />
    </BrowserRouter>
  );
}
