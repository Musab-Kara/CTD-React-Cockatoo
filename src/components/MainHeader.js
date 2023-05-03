import React from "react";
import classes from "../style/MainHeader.module.css";
import AddTodoForm from "./AddTodoForm";
import { TfiLayoutListThumb } from "react-icons/tfi";

function MainHeader({ todoList, setTodoList }) {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <TfiLayoutListThumb size={40} />
          My ToDo List
        </h1>
      </header>

      <AddTodoForm todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default MainHeader;

