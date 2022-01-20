import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  const Inc = () => {
    setValue(value + 1);
  };

  const Dec = () => {
    setValue(value - 1);
  };

  const Doub = () => {
    setValue(value * 2);
  };

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h1>{value}</h1>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
      <button onClick={Doub}>Double</button>
    </div>
  );
}
