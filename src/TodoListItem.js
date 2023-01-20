import React from 'react';

function TodoListItem(props) {

    return (
    <div>
         <li>
         <p>{props.todo.title}</p>
         </li>
    </div> ); 

}

export default TodoListItem;