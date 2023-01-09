import React, { useState } from 'react';
import List from './components/List'; 
import TodoForm from './components/TodoForm'; 
import Item from './components/Item'; 
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);

    // essa função vai criar um novo array pegando todos os item que tiverem o id diferente do passado como argumento da função, ou seja vai excluir esse item
    function onDeleteItem(item) {
        let filteredItems = items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    }
   
    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item]);
    }   

    return(
        <div className='container'>
            <h1>Todo-List</h1>
            <TodoForm  onAddItem={onAddItem}></TodoForm>
            <List onDeleteItem={onDeleteItem} items={items}></List>
        </div>
    )
}

export default Todo;