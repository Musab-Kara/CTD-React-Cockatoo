import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({ todo, onRemoveTodo }) {
  

  
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
TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};
export default TodoListItem;
