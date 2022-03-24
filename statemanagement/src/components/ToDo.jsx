import { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoItems from "./ToDoItems";
import { nanoid } from 'nanoid';

export const ToDo = () => {

  const [todo, setTodo] = useState([]);

  const inputValue = (data) => {
      const payload = {
          title: data,
          status : false,
          id : nanoid(5)
      }
    setTodo([...todo, payload]);
    console.log("list", todo);
  };

  const toggleStatus = (id)=>{
    let newList = todo.filter((el)=>el.id !== id);
    console.log("all todo",todo)
    setTodo([...newList])
  }

  return (
    <>
      <ToDoInput getData={inputValue} />

      {todo.map((el) => (
        <ToDoItems key = {el.id} {...el} toggleStatus={toggleStatus} />
      ))}
    </>
  );
};
