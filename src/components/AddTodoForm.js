import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./AddTodoForm.module.css";
import { MdPostAdd } from "react-icons/md";

function AddTodoForm({ todoList, setTodoList }) {
  
  const [todoTitle, setTodoTitle] = useState("");

  

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    
    setTodoList([
      ...todoList,
      {
        fields: {
          Title: todoTitle,
        },
        createdTime: Date.now(),
        id: Date.now() + "",
      },
    ]);

    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          id="todoTitle"
          type="text"
          value={todoTitle}
          name="title"
          onChange={handleTitleChange}
        ></input>
        <button type="submit" className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </button>
       
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  setTodoList : PropTypes.func,
  todoList: PropTypes.array,

};

export default AddTodoForm;
