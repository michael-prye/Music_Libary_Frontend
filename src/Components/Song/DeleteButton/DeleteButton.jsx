import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';



const DeleteButton = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);




    async function deleteButton(){
        try{
            let response = await axios.delete('http://127.0.0.1:8000/api/music/' + props.id)
            console.log(response.data)
            props.getAllSongs();
        }catch(ex){
            console.log(ex)
        }}
    
    function verifyDelete(){
        handleShow()

    }


    return (
        <div> 
        <Button variant='danger' onClick={verifyDelete}>DELETE</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Warning! Are you sure you want to delete the song?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant='danger' onClick={deleteButton}>DELETE</Button>
                <Button variant='secondary' onClick={handleClose}>CLOSE</Button>
            </Modal.Body>
        </Modal>
        </div>


    );
}
 
export default DeleteButton;