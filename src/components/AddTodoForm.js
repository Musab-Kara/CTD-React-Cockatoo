import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import classes from "./AddTodoForm.module.css";
// import classes from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

function AddTodoForm({ onAddTodo, todoList, setTodoList }) {
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
    // onAddTodo({
    //   title: todoTitle,
    //   id: Date.now(),
    // });
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
          // style={classes.todoTitle}
          id="todoTitle"
          type="text"
          value={todoTitle}
          name="title"
          onChange={handleTitleChange}
        ></input>
        {/* <button className={style.button} type="submit">
          Add
        </button> */}
        {/* <button className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </button> */}
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
