import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./public/styles/tailwind.css";
import "./public/styles/output.css";
import "./public/styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="main-background">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
