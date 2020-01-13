import ReactDOM from "react-dom";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
