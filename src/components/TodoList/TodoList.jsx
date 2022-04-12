import React from "react";
import "./TodoList.css";
const TodoList = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div className="todos">
      <div className="list-item">
        <p className={todo.status ? "complt-text" : "list"}>{todo.title}</p>
        <div>
          <button
            className="button-complete button"
            onClick={() => {
              handleToggle(todo.id);
            }}
          >
            <i className="far fa-check-circle"></i>
          </button>
          <button className="button-edit button">
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="button-delete button"
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
