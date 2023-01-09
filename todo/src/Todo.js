import React, { useState } from 'react';
import './Todo.css';

function Todo() {

    // o estado do text começa vazio
    const [text, setText] = useState('');

    // pegando o valor do input
    // Todo evento possui target e value 

    function handleChange(e) {
        let inputValue = e.target.value;
        setText(inputValue);
    }

    return(
        <div className='container'>
            <h1>Todo-List</h1>
            <form>
                <input onChange={handleChange}></input>
                <button>add</button>
            </form>

            <ul> {/*  passando text como item da lista */}
                <li>{text}</li>
            </ul>
        </div>
    )
}

export default Todo;