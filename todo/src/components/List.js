import src_delete from '../assets/delete.png';
import src_done from '../assets/done.png';
import src_undone from '../assets/undone.png';
import Card from './Card';

function DoneImg(props) {
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
            <li key={item.id}>
                <Card className={item.done?'done item':'item'}>
                    {item.text}
                    <div>
                        <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                        <button onClick={()=>{props.onDeleteItem(item)}}>
                            <img alt='delete' src={src_delete}></img>
                        </button>
                    </div>
                </Card>
            </li>)}
        </ul>
    )
}

export default List;