import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "../style/AddTodoForm.module.css";
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
      <form onSubmit={handleAddTodo} className={classes.musab}>
        <div className={classes.input}>
          <label htmlFor="todoTitle"></label>

          <input
            className={classes.input}
            id="todoTitle"
            type="text"
            value={todoTitle}
            name="title"
            onChange={handleTitleChange}
            placeholder="Add tasks, get things done.It's that easy."
          ></input>

          <button type="submit" className={classes.button}>
            <MdPostAdd size={18} />
            New Post
          </button>
        </div>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  setTodoList: PropTypes.func,
  todoList: PropTypes.array,
};

export default AddTodoForm;
