import React ,{useState}  from 'react';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';


  function App() {
    const [newTodo, setNewTodo] = useState("");
    return (
      <React.Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList />
      </React.Fragment>
    );
  } 

export default App;
