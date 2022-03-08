import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index.jsx";
import { GlobalFonts } from "./global_styles/fonts.js";
import { GlobalStyles } from "./global_styles/styles.js";

ReactDOM.render(
  <>
    <App />
    <GlobalFonts />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
