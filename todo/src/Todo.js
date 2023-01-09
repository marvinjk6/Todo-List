import React, { useState } from 'react';
import List from './components/List'; 
import TodoForm from './components/TodoForm'; // importar TodoForm
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);

    // essa função que atualiza o estado de items, vai ser passada como propriedade de TodoForm
    function onAddItem(text) {
        setItems([...items, text])
    }   

    return(
        <div className='container'>
            <h1>Todo-List</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List items={items}></List>
        </div>
    )
}




export default Todo;