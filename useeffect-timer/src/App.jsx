import "./App.css";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  function handleTimer() {
    setShow((show)=>!show);
  }

  return (
    <div className="App">
      {show && <Timer />}
      <button onClick={() => handleTimer()}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default App;
