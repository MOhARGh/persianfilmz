import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./public/styles/tailwind.css";
import "./public/styles/output.css";
import "./public/styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="main-background">
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
