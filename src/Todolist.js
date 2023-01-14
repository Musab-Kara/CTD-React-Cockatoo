import React from 'react';
import TodoListItem from './TodoListItem';
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


function TodoList() {
    return ( 
    <ul>
        {todoList.map((item) => {

            return(<TodoListItem id={item.id} key={item.id} todo={item} />)
        }
        )}

    </ul>
    );
}

export default TodoList;