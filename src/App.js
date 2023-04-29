import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/Todolist";
import MainHeader from "./components/MainHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./components/MainHeader.module.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(todoList, "todoList");
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
        result.records.sort(function (objectA, objectB) {
          if (objectA.fields.Title < objectB.fields.Title) {
            return 1;
          } else if (objectA.fields.Title > objectB.fields.Title) {
            return -1;
          } else {
            return 0;
          }
        });
        setTodoList([...(result.records || [])]);
        setIsLoading(false);
      });
  }, []);

  function addTodo(event) {
    console.log(event.target.value);
    // debugger;
    let newTodos = [event, ...todoList];
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
  function MainHeader({ onAddTodo }) {
    return (
      <header className={classes.header}>
        <h1 className={classes.logo}>
          {/* <MdMessage /> */}
          My ToDo List
        </h1>
        <>
          <AddTodoForm
            onAddTodo={addTodo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        </>
        <p>
          <button className={classes.button} onClick={onAddTodo}>
            <MdPostAdd size={18} />
            New Post
          </button>
        </p>
      </header>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <MainHeader onAddTodo={addTodo}></MainHeader>
              {/* <h1 className="heading">Todo List</h1> */}
              {/* <AddTodoForm
                onAddTodo={addTodo}
                todoList={todoList}
                setTodoList={setTodoList}
              /> */}
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
