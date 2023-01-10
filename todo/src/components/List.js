import ListItem from "./ListItem";

function List(props) {

    // o ideal é que cada componete tenha uma função clara, antes List além de criar a lista, ele criava cada um dos itens. Agora ele cria a lista
    // e ListItem os itens da lista. ListItem tem que ter acesso a item e as funções que alteram os estados dos items

    return (
        <ul> 
            {props.items.map(item => 
                <ListItem key={item.id} onDone={props.onDone} onDeleteItem={props.onDeleteItem} item={item}></ListItem>
            )}
        </ul>
    )
}

export default List;