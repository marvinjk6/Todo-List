import React, { useEffect, useState } from 'react';
import List from './components/List'; 
import TodoForm from './components/TodoForm'; 
import Item from './components/Item'; 
import './Todo.css';
import Modal from './components/Modal';

const SAVED_ITEMS = "savedItems";

function Todo() {

    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems) {
            setItems(savedItems);
        }
    }, []);


    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);
    


    function onDeleteItem(item) {
        let filteredItems = items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    }
   
    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item]);
        onHideModal();
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if(it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems);
    }

    function onHideModal() {
        setShowModal(false);
    }

    return(
        <div className='container'>
            <header className='header'>
                <h1>Todo-List</h1>
                <button className='addButton' onClick={()=>{setShowModal(true)}}>+</button>
            </header>
            
            <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}></List>
            <Modal showModal={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}

export default Todo;