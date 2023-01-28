import React ,{useState}  from 'react';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';




  function App() {

    const [todoList, setTodoList] = useState([]);

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
