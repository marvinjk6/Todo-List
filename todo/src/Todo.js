import React, { useState } from 'react';
import List from './components/List'; 
import TodoForm from './components/TodoForm'; 
import Item from './components/Item'; // importar Item
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);

   
    function onAddItem(text) {
        // a função cria um item e adiciona em items
        let item = new Item(text)
        setItems([...items, item])
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