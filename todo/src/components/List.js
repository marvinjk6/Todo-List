import src_delete from '../assets/delete.png'; //colocando imagem no button

function List(props) {

    return (
        <ul> 
            {props.items.map(item => 
            <li key={item.id}>
                {item.text}
                <button onClick={()=>{props.onDeleteItem(item)}}>
                    <img alt='delete' src={src_delete}></img>
                </button>
            </li>)}
        </ul>
    )
}

export default List;