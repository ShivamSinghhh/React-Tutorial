import React from 'react'

export const TodoItem = ({title,status,id,handleToggle}) => {
    console.log("ID of ",title,"is",id)
  return (<>
    <div>
        {title} - {status ? "Done": "Not Done"}
       <button onClick={()=>handleToggle(id)}>Toggle Status</button>
    
    </div>
    </>
  )
}
