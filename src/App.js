import React from 'react';


let todoList = [
  {
    id:1,
    title: "task 1"
  },
  {
    id:2,
    title: "task 2"
  },
  {
    id:3,
    title: "task 3"
  }];

  function App() {
    return (
      <React.Fragment>
      <h2>Todo List</h2>
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
