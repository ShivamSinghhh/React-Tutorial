import { useState } from "react";
import "./styles.css";

export default function App() {
  let digTime = new Date().toLocaleTimeString();
  let [ctime, setTime] = useState(digTime);

  const updateTime = () => {
    digTime = new Date().toLocaleTimeString();
    setTime(digTime);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <h1> Hello World !</h1>
      <h2> Current Time At This Place is</h2>
      <button>{ctime}</button>
    </div>
  );
}
