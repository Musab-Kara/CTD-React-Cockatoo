import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./Todolist";
import MainHeader from "./MainHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList(result.records);
        setIsLoading(false);
      });
  }, []);
  function addTodo(newTodo) {
    let newTodos = [newTodo, ...todoList];
    setTodoList(newTodos);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  }

  useEffect(() => {
    if (!isLoading) {
      return localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <MainHeader />
              {/* <h1 className="heading">Todo List</h1> */}
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading ...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        />
        <Route
          path="/new"
          element={
            <div>
              <MainHeader />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
