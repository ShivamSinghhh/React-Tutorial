import "./App.css";
import { useState } from "react";
import Posts from "./Components/Posts";

function App() {
  const [counter, setCounter] = useState(0);
  // "counter" is a premitive data and "setCounter" is a function which will update data of counter
  // "setCounter is a dispatch function of react"
  // "setState is kind of Async in nature"
  // "setState batched updates"
  // "setState is also known as Dispatcher function"

  const handleCounter = (value) => {
    // setCounter(counter + value); // or otherwise , we can write it as below.
    // Inthis Dispatcher function, Instead ofvalue,we are sending another callback fn.
    // Inside callBackfn, Latest value will be received from React internally instead of Asyn.

    setCounter((counter) => counter + value); // callBack function
    setCounter((counter) => counter + value); // counter will get latest value from React
    setCounter((counter) => counter + value);
    setCounter((counter) => counter + value); 

    // 99 % times will be using the below one approach
    setCounter(counter + value); // counter will get the initial value b4 Async functn.

    console.log("counter inside will have previous value :", counter);
  };
  // conditional rendering
  console.log("counter outside will have same value as UI", counter);
  if (counter > 100)
    return <h1 style={{ color: "red" }}>Counter reached its maxmimum value</h1>;

  return (
    <div className="App">
      <div>
        <h2>count = {counter}</h2>
        {counter <= 100 && (
          <div>
            <button
              disabled={counter === 100}
              onClick={() => {
                handleCounter(5);
              }}
            >
              Add 5
            </button>
            <button
              disabled={counter === 0}
              onClick={() => {
                handleCounter(-5);
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

      {/* Get or Fetch data from API and display it. */}
      <Posts />
    </div>
  );
}

export default App;
