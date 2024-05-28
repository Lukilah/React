import React from "react";
import ReactDOM from "react-dom";

const myName = "Alvin Shabaya";
const d = new Date();
let year = d.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
