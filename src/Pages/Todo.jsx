import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (title) => {
    const payload = {
      id: uuid(),
      title,
      status: false,
    };
    setTodos([...todos, payload]);
  };

  const handleStatus = (id) => {
    let updatedStatus = todos?.map((item) => (item.id === id ? { ...item, status: !item.status } : item));
    setTodos(updatedStatus);
  };

  const handleDelete = (id) => {
    let updatedTodos = todos?.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div className="">
      <TodoInput handleAdd={handleAdd} />
      {todos &&
        todos?.map((el) => <TodoList key={el.id} {...el} handleStatus={handleStatus} handleDelete={handleDelete} />)}
    </div>
  );
};
