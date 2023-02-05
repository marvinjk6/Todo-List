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

function ListItem(props) {

    return(
        <li>
            <Card className={props.item.done?'done item':'item'}>
                {props.item.text}
                <div>
                    <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=>{props.onDeleteItem(props.item)}}>
                        <img alt='delete' src={src_delete}></img>
                    </button>
                </div>
            </Card>
        </li>)

}

export default ListItem;