import React from "react";
import ReactDOM from "react-dom";

const name = "Lukilah";
const luckyNumber = 5;

ReactDOM.render(
  <div>
    <h1>Hello World, I am {name}!</h1>
    <p>And my lucky number is: {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
