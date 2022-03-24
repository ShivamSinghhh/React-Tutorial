import React from "react";
import { useState } from "react";

function TodoInput({getData}) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    // console.log(text);
    getData(text);
  };

  return (
    <div>
      <input type="text" placeholder="Enter Todo" onChange={handleChange} />
      <button onClick={handleClick}>Add ToDo</button>
    </div>
  );
}

export default TodoInput;
