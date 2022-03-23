import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // "counter" is a premitive data and "setCounter" is a function which will update data of counter
  // "setCounter is a dispatch function of react"

  const changeValue = (value) => {
    // setCounter(counter + value); // or otherwise , we can write it as below
    setCounter((prev) => {
      if (prev === 100) {
        return 0;
      }
      return prev + value;
    });
    console.log("counter :", counter);
  };

  // conditional rendering
  if (counter > 100)
    return <h1 style={{ color: "red" }}>Counter reached its maxmimum value</h1>;

  return (
    <div className="App">
      <h2>count = {counter}</h2>
      {counter <= 100 && (
        <div>
          <button
            disabled={counter === 100}
            onClick={() => {
              changeValue(5);
            }}
          >
            Add 5
          </button>
          <button
            disabled={counter === 0}
            onClick={() => {
              changeValue(-5);
            }}
          >
            Substract 5
          </button>
          {/* {counter %2 === 0 && (<h2>Counter is Even</h2>)}
          {counter %2 !== 0 && (<h2>Counter is Odd</h2>)} */}
          <h2>Counter is {counter % 2 === 0 ? "Even" : "Odd"}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
