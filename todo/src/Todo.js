import React, { useEffect, useState } from 'react';
import List from './components/List'; 
import TodoForm from './components/TodoForm'; 
import Item from './components/Item'; 
import './Todo.css';

const SAVED_ITEMS = "savedItems";

function Todo() {

    const [items, setItems] = useState([]);

    // primeiro fazer o código que vai pegar os itens que estão armazenados no localstorage, na primeira vez que abrir a página, não vai ter nada. 
    // Usar o useEffect o efeito dele cria, atualiza e limpa o componente
    // para pegar o que está no localstorage, vamos usar o getitem
    // LocalStorage armazena string, por isso usar JSON.parse, para pegar o objeto
    // passar o array como vazio, pois queremos que o useEffect seja, executado uma vez, sem ficar atualizando
    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems) {
            setItems(savedItems);
        }
    }, []);

    // para salvar items, usar localstorage.setItem
    // o localstorage armazena apenas strings, por isso vamos stringy items
    // foi passado items como segundo argumento do useEffect pois, toda vez que ele se modificar será atualizado e armazenado no localStorage 
    // como primeiro argumento de setItem é como se fosse o nome da varivel que armazena os items, também deve ser uma string
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