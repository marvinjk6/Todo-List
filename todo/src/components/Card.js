
// foi criado o component card, esse component recebe props.children( que é o que vai estar no componente List)

function Card(props) {
    // props.className = vai receber a classe que foi definida em List
    return(
        <div className={props.className?`${props.className} card`:'card'}>
            {props.children}
        </div>
    )
}

export default Card;