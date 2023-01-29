import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
  const [list, setList] = useState([]);
  const getTodo = (data) => {
    // console.log(data);
    const payload = {
      title: data,
      status: false,
      id: nanoid(2),
    };
    setList([...list, payload]);
  };

  const handleToggle = (id) => {
    console.log("handleToggle clicked");
    list.map((el) => {      
      el.id === id ? el.status = !el.status : el.status=el.status;
    });
    console.log(list)
    setList([...list]);
  };
  

  return (
    <div>
      <TodoInput getTodo={getTodo} />
      <div>
        {list.map((el) => {
          //   return <TodoItem key={el.id} title={el.title} status={el.status}/>;
          return <TodoItem key={el.id} {...el} handleToggle={handleToggle} />;
        })}
      </div>
    </div>
  );
};
