import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./TodoListItem.module.css";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const mybtn = {
    backgroundColor: "#a990fb",
    color: "white",
    padding: "5px",
    fontFamily: "Verdana, sans-serif",
    fontSize: "20px",
    borderRadius: "2px",
    margin: "10px",
  };

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          style={{ margin: "10px" }}
          id="todoTitle"
          type="text"
          value={todoTitle}
          name="title"
          onChange={handleTitleChange}
        ></input>
        {/* <button className={style.button} type="submit">
          Add
        </button> */}
      </form>
    </div>
  );
}

export default AddTodoForm;
