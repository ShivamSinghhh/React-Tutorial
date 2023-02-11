import "./App.css";
import ButtonWithUseRef from "./components/ButtonWithUseRef";
import ButtonWithUseState from "./components/ButtonWithUseState";
import Todo from "./components/Todo";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <h1>Counter with Use-Ref</h1>
      <ButtonWithUseRef />
      <ButtonWithUseState />
      <h1>Todo with Use-Ref</h1>
      <Todo/>
      <h1>Timer App</h1>
     
      {show && <Timer />}
      <button onClick={handleClick}>
        {show ? "Hide-Timer" : "Show-Timer"}{" "}
      </button>
    </div>
  );
}

export default App;
