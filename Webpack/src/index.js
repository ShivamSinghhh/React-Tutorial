import { add, mult } from "./calculation";
import("./index.css");

import React from "react";
import ReactDom from "react-dom";

console.log(add(15, 5));
console.log(mult(15, 5));

// let h1 = document.createElement("h1");
// h1.innerText = "Hello Webpack from normal HTML !";
// h1.className = "redcolor";
// document.getElementById("root").append(h1)

ReactDom.render(
  React.createElement(
    "h1",
    { className: "redcolor" },
    "Hello Webpack from React"
  ),
  document.getElementById("root")
);
