import React, { useState } from "react";
import Header from "../Header/Header";
import TodoItem from "../TodoItem/TodoItem";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";
import { nanoid } from "nanoid";
import CompltedTodo from "../CompltedTodo/CompltedTodo";

const Todo = () => {
  const [todosList, setTodoList] = useState([]);
  const getTodoData = (todo) => {
    const data = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todosList, data]);
  };

  const handleToggle = (id) => {
    setTodoList(todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)));
  };
  const handleDelete = (id) =>{
     setTodoList(todosList.filter((todo) => todo.id !== id));
  }
  const showComplted = () => {
    console.log(todosList.filter((todo) => todo.status !== false));
  };
  return (
    <>
      <div className="App-wrapper">
        <div className="header">
          <Header />
        </div>

        <div>
          <TodoItem getTodoData={getTodoData} />
        </div>

        <div>
          {todosList.map((e) => {
            return <TodoList todo={e} handleToggle={handleToggle} handleDelete={handleDelete} />;
          })}
        </div>
        <div>
     
          <CompltedTodo showComplted={showComplted} />
        </div>
      </div>
    </>
  );
};

export default Todo;
