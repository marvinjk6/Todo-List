import React, { useState } from 'react';
import './Todo.css';

function Todo() {

    // o estado inicial de items é um array vazio
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    function addItem(e) {
        // o comportamento padrão do botão de um formulário é assim que for clicado enviar os dados e atualiza a página, vamos impedir esse comportamento.
        e.preventDefault();

        // o if(text) quer dizer, se o input tiver um valor 'se ele for preenchido', aí sim vai adicionar ao array items, caso o contrário não
        if(text) {
             // o array vai receber o que já contem em items + valor de text, que é o valor do input
        setItems([...items, text]);
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

            <ul> {/*  items, que é um array e tem a função map, que cria um array */}
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Todo;