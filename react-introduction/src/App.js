import "./styles.css";

import { Card } from "./components/Card";

export default function App() {
  let h1 = "Mobile Operating System";
  let arr1 = ["Android", "Blackberry", "iPhone", "Windows Phone"];

  let h2 = "Mobile Manufacturers";
  let arr2 = ["Samsung", "HTC", "Micromax", "Apple"];
 

  return (   
    <div className="App header">
      
    <Card heading={h1} arr={arr1}></Card>
    <Todos name="Shivam" city="Bengaluru"/>
    <Card heading={h2} arr={arr2}></Card>
  </div>
  );

  function Todos({name,city}){
    return <h1 style={{color:"red"}}>My name is {name}. I live in {city}</h1>
  }
}
