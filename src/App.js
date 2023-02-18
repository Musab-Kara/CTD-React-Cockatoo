import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./Todolist";

const useSemiPersistentState = () => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    let newTodos = [newTodo, ...todoList];
    setTodoList(newTodos);
  }

  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </React.Fragment>
  );
}

export default App;
