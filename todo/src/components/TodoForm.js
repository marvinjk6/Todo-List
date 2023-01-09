import { useState } from 'react';

function TodoForm(props) {

    // o form precisa ter acesso a text e as funções do formulário, pois são elas que modificam o estado de text
    const [text, setText] = useState('');

    function addItem(e) {
        e.preventDefault();
        if(text) {
            // função que vai adicionar text no array items, pois ela tem acesso a items
            props.onAddItem(text);
            setText('');
        }
       
    }

    function handleChange(e) {
        let inputValue = e.target.value;
        setText(inputValue);
    }

    return(
        <div>
            <form>
                <input value={text} onChange={handleChange}></input>
                <button onClick={addItem}>add</button>
            </form>
        </div>
    )

}

export default TodoForm;