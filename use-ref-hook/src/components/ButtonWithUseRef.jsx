import { useRef } from "react";

export default function ButtonWithUseRef() {
  let count = useRef(0);
  function handleClick() {
    count.current++;
    console.log("count inside handleClick", count);
  }
  console.log("count inside useRef: " + count.current);

  return (
    <div>
      <h2>Count : {count.current}</h2>
      <button onClick={handleClick}>Button with Use-ref</button>
    </div>
  );
}
