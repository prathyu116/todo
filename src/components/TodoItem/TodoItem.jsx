import React, { useState } from 'react'
import "./TodoItem.css"

const TodoItem = ({ getTodoData }) => {
  const [text, setText] = useState("");
  const[err,setErr]=useState(false)

  return (
    <>
      <div>
        <input
          type="text"
          className="input-task"
          placeholder="🖊️ Add item..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="add"
          onClick={() => {
            text == "" ? setErr(true) : getTodoData(text);
          }}
        >
          {" "}
          Add
        </button>
      </div>
      {err ? (
        <p style={{ color: "white" }}>
          <i>ooops!!!!! Please Enter The Tods...</i>
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default TodoItem