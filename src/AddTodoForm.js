import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

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
        {/* <label htmlFor="todoTitle">Title</label>
        <input
          id="todoTitle"
          type="text"
          value={todoTitle}
          name="title"
          onChange={handleTitleChange}
        ></input>
        <button>Add</button> */}

        <InputWithLabel
          handleTitleChange={handleTitleChange}
          isFocused
          todoTitle={todoTitle}
        >
          Title:
        </InputWithLabel>
      </form>
    </div>
  );
}

export default AddTodoForm;
