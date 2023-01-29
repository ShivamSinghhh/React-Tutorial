import "./App.css";
import { useState } from "react";
import { Child1 } from "./components/Child1";
import { Child2 } from "./components/Child2";
import { Child3 } from "./components/Child3";
import { Todo } from "./components/Todo";

function App() {
  const schoolName = "Masai School";
  const [name, setName] = useState("default");

  
  const getName = (data) => {
    setName(data);
  }; 

  return (
    <div className="App">
     
      {/* <h2>Parent App</h2>     
      <Child1 school={schoolName} />     
      <Child2 getName={getName} />
      <h4>Received name from Child2 -{name}</h4>
      <Child3 name={name} /> */}
      <h2>
        Todo App
      </h2>
      <Todo/>
    </div>
  );
}

export default App;
