import React from "react";
import style from "./TodoListItem.module.css";

function TodoListItem({ todo, onRemoveTodo }) {
  const removeBtn = {
    // backgroundColor: "#a990fb",
    // color: "white",
    // padding: "5px",
    // fontFamily: "Verdana, sans-serif",
    // fontSize: "12px",
    // borderRadius: "2px",
    // margin: "10px",
  };

  const handleRemoveItem = () => {
    onRemoveTodo(todo.id);
  };
  return (
    <div key={todo.id}>
      <li className={style.ListItem}>
        {" "}
        {todo.fields.Title}{" "}
        <button
          className={style.button}
          type="button"
          onClick={() => onRemoveTodo(todo.id)}
        >
          Remove
        </button>
      </li>
    </div>
  );
}

export default TodoListItem;
