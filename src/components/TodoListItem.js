import React from "react";
import { useState } from "react";
import style from "../style/TodoListItem.module.css";
import PropTypes from "prop-types";
import { MdOutlineDeleteOutline } from "react-icons/md";

function TodoListItem({ todo, onRemoveTodo }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div key={todo.id}>
      
        <li className={style.ListItem}>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className={style.itemCart}
          />
          <span className={checked == false ? style.title : style.titleLine}>
            {todo.fields.Title}
          </span>
          <button
            className={style.button}
            type="button"
            onClick={() => onRemoveTodo(todo.id)}
          >
            <MdOutlineDeleteOutline size={18} />
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
