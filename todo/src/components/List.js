import ListItem from "./ListItem";

function List(props) {

    return (
        <ul> 
            {props.items.map(item => 
                <ListItem key={item.id} onDone={props.onDone} onDeleteItem={props.onDeleteItem} item={item}></ListItem>
            )}
        </ul>
    )
}

export default List;