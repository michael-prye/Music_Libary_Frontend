import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Modal from 'react-bootstrap/Modal'



const FilterSongs = (props) => {
    const [songFilter, setSongFilter]= useState('');
    const [dropDownOne, setDropDownOne] = useState('ALL');
    const [show, setShow] = useState(false);
    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);
    const [modalLabel, setModalLabel] = useState('')

    
   
    function artistFilter(){
        setDropDownOne('artist'); // This is for the applyFilter function in app.js
        setModalLabel('Artist') // This is to display on the Modal
        handleShow();   
    }
    function albumFilter(){
        setDropDownOne('album') // This is for the applyFilter function in app.js
        setModalLabel('Album') // This is to display on the Modal
        handleShow(); 
    }
    function genreFilter(){
        setDropDownOne('genre')
        setModalLabel('Genre') // This is to display on the Modal
        handleShow();}
    function releaseDateFilter(){
        setDropDownOne('release_date')
        setModalLabel('Release Date') // This is to display on the Modal
        handleShow();}
            
    
    function titleFilter(){
        setDropDownOne('title')
        setModalLabel('Title') // This is to display on the Modal
        handleShow();}
    
    function handleSubmit(event){
        event.preventDefault();
        handleClose();
        props.applyFilter(dropDownOne, songFilter);
    }
    function handleReset() {
        setDropDownOne("All");
        setSongFilter("");
        props.applyFilter("All", "");


    }


    return ( 
        <div>
            
        <DropdownButton title={dropDownOne}>
            <Dropdown.Item as="button" onClick={artistFilter}>Artist</Dropdown.Item>
            <Dropdown.Item as="button" onClick={albumFilter}>Album</Dropdown.Item>
            <Dropdown.Item as="button" onClick={genreFilter}>Genre</Dropdown.Item>
            <Dropdown.Item as="button" onClick={releaseDateFilter}>Release Date</Dropdown.Item>
            <Dropdown.Item as="button" onClick={titleFilter}>Title</Dropdown.Item>
        </DropdownButton>
        <Button type='reset' onClick={handleReset}>RESET</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Filter Songs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label>Enter {modalLabel} </label>
                    <input type='text' value={songFilter} onChange={(event)=> setSongFilter(event.target.value)} />
                    <Button type='submit'>Filter</Button>
                </form>

            </Modal.Body>
        </Modal>
        
        
        



        </div>
        
        
        
     );
}
 
export default FilterSongs;