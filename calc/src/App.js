import "./styles.css";
import mults, { sub, div, add } from "./Cal";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>Sum of two number is {add(40, 4)}</li>
        <li>Sub of two number is {sub(40, 4)}</li>
        <li>Multiplication of two number is {mults(40, 4)}</li>
        <li>Devision of two number is {div(13, 3)}</li>
      </ul>
    </div>
  );
}
