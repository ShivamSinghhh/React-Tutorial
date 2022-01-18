import "./styles.css";
import Heading from "./components/Heading";
import Para from "./components/Para";
import List from "./components/List";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Para />
      <List />
    </div>
  );
}
