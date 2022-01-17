import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import "./App.scss";
import "./scss/Reset.css";
import MainPage from "./page/mainPage";
import { Route, Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/main" component={MainPage} />
    </BrowserRouter>
  );
}
