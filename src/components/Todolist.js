import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "../style/TodoList.module.css";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={styled.items}>
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
