import React from "react";
import ReactDOM from "react-dom";

const definedStyle = {
  color: "purple",
  fontSize: "15px",
  fontWeight: "500",
  border: "2px solid grey",
};

ReactDOM.render(
  <h1 style={definedStyle}>Hello World!</h1>,
  document.getElementById("root")
);
