import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
let time = d.getTime();

let greeting;
let customStyle = {
  color: "",
};

if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

function App() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
