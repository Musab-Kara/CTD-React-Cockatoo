import React from "react";
import classes from "./MainHeader.module.css";
import AddTodoForm from "./AddTodoForm";

function MainHeader({ todoList, setTodoList }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>My ToDo List</h1>
      <>
        <AddTodoForm todoList={todoList} setTodoList={setTodoList} />
      </>
    </header>
  );
}

export default MainHeader;
