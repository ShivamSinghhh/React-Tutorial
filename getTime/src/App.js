import { useState } from "react";
import "./styles.css";

 

export default function App() {

  let newTime = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(newTime);

  function GetTime() {
    newTime = new Date().toLocaleTimeString()
    setTime(newTime);
  
  }

  return (
    <>
      <div className="App">
        <h1> Hello World !</h1>
        <h1>{ctime}</h1>
        <button onClick={GetTime}>GET TIME</button>
       
      </div>
    </>
  );
}
