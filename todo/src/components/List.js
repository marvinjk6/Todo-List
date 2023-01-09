import src_delete from '../assets/delete.png';
import src_done from '../assets/done.png';
import src_undone from '../assets/undone.png';

// a ideia é criar um componete que tem uma propriedade chamada done, essa propriedade é a propriedade done do objeto item (item.done = false), esse componete vai alterar entre duas imagens, se for true ou false.

function DoneImg(props) {
    // se for true
    if(props.done) {
        return(<img alt='done' src={src_done}></img>)
    } else {
        return(<img alt='undone' src={src_undone}></img>)
    }   
}

function List(props) {

    return (
        <ul> 
            {props.items.map(item => 
            <li className={item.done?'done':''} key={item.id}>
                {item.text}
                <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                <button onClick={()=>{props.onDeleteItem(item)}}>
                    <img alt='delete' src={src_delete}></img>
                </button>
            </li>)}
        </ul>
    )
}

export default List;