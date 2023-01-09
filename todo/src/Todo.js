import React, { useState } from 'react';
import List from './components/List'; 
import TodoForm from './components/TodoForm'; 
import Item from './components/Item'; 
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);


    function onDeleteItem(item) {
        let filteredItems = items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    }
   
    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item]);
    }

    // essa função vai fazer item.done ir alternado entre true e false
    function onDone(item) {
        let updatedItems = items.map(it => {
            if(it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems);
    }

    return(
        <div className='container'>
            <h1>Todo-List</h1>
            <TodoForm  onAddItem={onAddItem}></TodoForm>
            <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}></List>
        </div>
    )
}

export default Todo;