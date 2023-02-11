import { useRef, useState, useEffect } from "react";

export default function Todo() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const handleAdd = () => {
    let inputValue = inputRef.current.value;
    console.log(inputValue);
    setTasks([...tasks, inputValue]);
    // inputRef.current.focus()
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Add TODO" />
      <button onClick={handleAdd}>Add TODO</button>

      <div>
        {tasks.map((task, id) => {
          return <li key={id}>{task}</li>;
        })}
      </div>
    </div>
  );
}
