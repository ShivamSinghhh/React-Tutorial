import { useState } from "react";
import "./styles.css";

export default function App() {
  // const state = useState();
  const [count, setCount] = useState(5);

  function IncNum() {
    setCount(count + 1);
    //  console.log(count)
  }

  const DecNum = () => {
    setCount(count - 1);
    // console.log(count)
  };

  return (
    <>
      <div className="App">
        <h1> Hello World !</h1>
        <div>{count}</div>
        <button onClick={IncNum}>Increment</button>
        <button onClick={DecNum}>Decrement</button>
      </div>
    </>
  );
}
