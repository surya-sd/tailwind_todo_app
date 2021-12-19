import React, { useEffect, useState } from "react";
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
    localStorage.setItem("todos", JSON.stringify([...todos, payload]));
  };

  const handleStatus = (id) => {
    let updatedStatus = todos?.map((item) => (item.id === id ? { ...item, status: !item.status } : item));
    setTodos(updatedStatus);
    localStorage.setItem("todos", JSON.stringify(updatedStatus));
  };

  const handleDelete = (id) => {
    let updatedTodos = todos?.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleTitle = (id, title) => {
    let updatedTitle = todos?.map((item) => (item.id == id ? { ...item, title: title } : item));
    setTodos(updatedTitle);
    localStorage.setItem("todos", JSON.stringify(updatedTitle));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
    console.log(localStorage.getItem("todos"));
  }, []);
  return (
    <div>
      <div className="mb-5">
        <TodoInput handleAdd={handleAdd} />
      </div>
      <div className=" overflow-y-scroll max-h-[70vh] scroll-smooth no-scrollbar">
        {todos &&
          todos?.map((el) => (
            <TodoList
              key={el.id}
              {...el}
              handleStatus={handleStatus}
              handleTitle={handleTitle}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};
