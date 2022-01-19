import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Click me");
  const [bg, setBg] = useState("");
  const bgChange = () => {
    let newBg = "#34495e";
    setText("Woww.. :)");
    setBg(newBg);
  };

  const bgBack = () => {
    setBg("#9b59b6");
    setText("Ayyyooo !!");
  };

  return (
    <>
      <h1>Hello World !</h1>
      <h2>Start hovering to see some magic happen!</h2>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>
          {text}
        </button>
      </div>
    </>
  );
}
