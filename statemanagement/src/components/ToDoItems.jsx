import React from "react";

function ToDoItems({title,status,toggleStatus,id}) {


  return (
    <>
      <h3>Task : {title} {status ? "Done": "Not Done"}</h3>
      <button onClick={()=>{toggleStatus(id)}}>Done</button>      
      
    </>
  );
}

export default ToDoItems;
