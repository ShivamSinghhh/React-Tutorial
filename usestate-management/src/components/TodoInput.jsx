import React from 'react'
import { useState } from 'react'

function TodoInput({getTodo}) {
    const [text,setText] = useState("");

    const handleChange =(event)=>{       
        setText(event.target.value)
    }
    const handleClick=()=>{
        getTodo(text);       
        console.log(text)
    }

  return (
    <div>
        <input type="text" placeholder='text' onChange={handleChange} />
        <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoInput