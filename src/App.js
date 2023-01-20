import React from 'react';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';


  function App() {
    return (
      <React.Fragment>
      <h1>Todo List</h1>

      <AddTodoForm />
      <TodoList />

      <ul>
        
        {todoList.map((item) => {

          return(<li key={item.id}><p>{item.title}</p></li>)

        }
        )}

      </ul>

      </React.Fragment>
    );
  }

export default App;
