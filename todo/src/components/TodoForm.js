import { useState } from 'react';

function TodoForm(props) {

    const [text, setText] = useState('');

    function addItem(e) {
        e.preventDefault();
        if(text) {
            props.onAddItem(text);
            setText('');
        }
       
    }

    function handleChange(e) {
        let inputValue = e.target.value;
        setText(inputValue);
    }

    return(
        <form>
            <input value={text} onChange={handleChange}></input>
            <button onClick={addItem}>add</button>
        </form>
    )

}

export default TodoForm;