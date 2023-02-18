import React from "react";

function TodoListItem({ todo }) {
  return (
    <div key={todo.id}>
      <li>
        <p>{todo.title}</p>
      </li>
    </div>
  );
}

export default TodoListItem;
