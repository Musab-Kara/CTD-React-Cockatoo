import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <div key={item.id}>
            <TodoListItem
              id={item.id}
              key={item.id}
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          </div>
        );
      })}
    </ul>
  );
}

export default TodoList;
