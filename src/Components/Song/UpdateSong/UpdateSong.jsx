import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import "./UpdateSong.css"


const UpdateSong = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);

    function UpdateForm(){

    }



    return ( 
        <div> 
        <Button variant='secondary' onClick={handleShow}>Update</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" class='updateForm'>
                    <label>Title</label>
                    <input type="text" />
                    <label>Artist</label>
                    <input type="text" />
                    <label>Album</label>
                    <input type="text" />
                    <label>Album Art</label>
                    <input type="text" />
                    <label>Release Date</label>
                    <input type="text" />
                    <label>Genre</label>
                    <input type="text" />
                </form>
                <Button variant='warning' >Close</Button>
                <Button variant='secondary' >Save</Button>
            </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default UpdateSong;