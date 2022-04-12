import React from 'react'
import "./CompltedTodo.css"

const CompltedTodo = ({ showComplted }) => {
  return (
    <button
      onClick={() => {
        showComplted();
      }}
    >
      CompltedTodo
    </button>
  );
};

export default CompltedTodo