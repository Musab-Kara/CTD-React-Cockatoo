import React from "react";

function TodoListItem(props) {
  return (
    <li>
      <p>{props.todo.title}</p>
    </li>
  );
}

export default TodoListItem;
