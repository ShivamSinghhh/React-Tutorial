import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import { useRef, useState } from 'react';
const person ={
  name:"shivam",
  age:30
}

function App() {
  const test= useRef(1)
  console.log(test)
  const [data,setData] = useState(1)  
    const handleIncrement = ()=>{
    console.log("handleIncrement clicked.")
    test.current = test.current+1;
    console.log("test value is",test)
  }
  const handleRender=()=>{
    setData(data+1)
    console.log("data value is",data)
  }
  const [mouse,setMouse] = useState("")
  return (<>
    <div className="App">
     <h1>Use-Form</h1>
     <Greeting/>
     <button onClick={()=>{handleIncrement()}}>Increment</button>
     <button onClick={()=>{handleRender()}}>Render</button>
     <h3>Data is {data}</h3>
     <h3>Test is {test.current}</h3>
     <div onMouseMove={(e)=>{setMouse(`X : ${e.clientX} - Y : ${e.clientY}`)}} style={{backgroundColor:"teal",width:"300px",height:"300px",border:"2px solid coral"}}
     >{mouse}</div>
     <div>{person.name}</div>
    </div>
    </>
  );
}

export default App;
