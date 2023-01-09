

function List(props) {

    function show(item) {
        console.log(item)
    }
    
    return (
        <ul>  {/* agora item é um objeto com propriedades */}
            {props.items.map(item => 
            <li key={item.id}>
                {item.text}
                <button onClick={()=>{show(item)}}>show item</button>
            </li>)}
        </ul>
    )

}

export default List;