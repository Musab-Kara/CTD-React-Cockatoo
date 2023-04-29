import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/Todolist";
import MainHeader from "./components/MainHeader";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList([...(result.records || [])]);
        setIsLoading(false);
      });
  }, []);

  

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
              <MainHeader
                todoList={todoList}
                setTodoList={setTodoList}
              />

              {isLoading ? (
                <p>Loading ...</p>
              ) : (
                <TodoList
                  todoList={todoList.sort((objectA, objectB) => {
                    if (objectA.fields.Title > objectB.fields.Title) {
                      return 1;
                    } else if (objectA.fields.Title < objectB.fields.Title) {
                      return -1;
                    } else {
                      return 0;
                    }
                  })}
                  onRemoveTodo={removeTodo}
                />
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
