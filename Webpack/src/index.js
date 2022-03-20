import {add,mult} from "./calculation";
import ("./index.css");

console.log(add(15,5));
console.log(mult(15,5));

let h1 = document.createElement("h1");
h1.innerText = "Hello Webpack !";
h1.className = "redcolor";

document.getElementById("root").append(h1)