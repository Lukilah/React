import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

https: ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src={img + "?grayscale"} />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkPj4pzYJdZIFkNW1qGJ4VeJeRWkilIYWvg&s" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRql9H6FFme68wNQ1vwpH-ohkES5F1DLudeA8cWngeapQ&s" />
    </div>
  </div>,
  document.getElementById("root")
);
