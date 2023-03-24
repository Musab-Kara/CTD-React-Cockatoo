import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveItem = () => {
    onRemoveTodo(todo.id);
  };
  return (
    <div key={todo.id}>
      <li>
        {/* <p>{todo.title}</p> */}
        {todo.fields.Title}
        <button type="button" onClick={handleRemoveItem}>
          Remove
        </button>
      </li>
    </div>
  );
}

export default TodoListItem;
