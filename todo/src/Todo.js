import React, { useState } from 'react';
import List from './components/List'; // importar list
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    function addItem(e) {
        e.preventDefault();
        if(text) {
            setItems([...items, text]);
            setText(''); // vai receber vazio depois de adicionar o text em items para limpar o input
        }
       
    }

    function handleChange(e) {
        let inputValue = e.target.value;
        setText(inputValue);
    }

    return(
        <div className='container'>
            <h1>Todo-List</h1>
            <form>
                <input value={text} onChange={handleChange}></input>
                <button onClick={addItem}>add</button>
            </form>

            {/* List precisa ter acesso a items, foi criado a propriedade items que recebe o array items */}
            <List items={items}></List>
        </div>
    )
}


export default Todo;