import Card from "./Card";


function Modal(props) {

    function hideModal(e) {
        let target = e.target;
        if(target.id === 'modal') {
            props.onHideModal();
        }
    }

    return(
        <div id='modal' onClick={()=>hideModal(true)} className={props.showModal?'modal':'modal hideModal'}>
            <Card className='cardModal'>
                {props.children}
            </Card>
        </div>
    )

}

export default Modal;