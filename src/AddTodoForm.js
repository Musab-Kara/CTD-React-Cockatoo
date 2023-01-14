import React ,{useState} from 'react';


function AddTodoForm(props) {

    const [todoTitle, setTodoTitle] = useState('');
    
   function handleAddTodo(event){

        
        props.onAddTodo(todoTitle);
        console.log(todoTitle);
        setTodoTitle('');
        event.preventDefault();
        
    }

    return ( 
        <div>
        <form  onSubmit={handleAddTodo}>
            <label style={{margin:10}} htmlFor="todoTitle">Title</label>
             <input style={{margin:10}} type="text" id="todoTitle" name='title' value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}></input>
            <button type='submit'>Add</button>
        </form>
        </div>
     );
}

export default AddTodoForm;

