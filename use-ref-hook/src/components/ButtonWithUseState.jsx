import { useState } from "react";

export default function ButtonWithUseState() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log("count inside handleClick -useState", count);
  }
  console.log("count inside use state", count);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleClick}>Button with Use-State</button>
    </div>
  );
}