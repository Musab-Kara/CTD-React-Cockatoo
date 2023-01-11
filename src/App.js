import React from 'react';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';


  function App() {
    return (
      <React.Fragment>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
      </React.Fragment>
    );
  }

export default App;
