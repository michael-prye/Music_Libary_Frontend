import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSong from './Components/AddSong/AddSong';
import FilterSongs from './Components/FilterSongs/FilterSongs';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';


function App() {
const [songs, setSongs] = useState([]);
useEffect(()=>{
  getAllSongs();
},[])
async function getAllSongs(){
  try{
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }catch (ex){
    console.log('Error in getAllSongs API call')
  }

}
function applyFilter(category, userInput){
  if(category === 'All'|| userInput ===''){
    console.log('this worked')
    getAllSongs();
  }
  else{
    let newSongs = songs.filter(function(el){
      if (el[category] === userInput){
        return true;
      }
    })
    setSongs(newSongs);
  }
}
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>Music Libary</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
  </Container>
</Navbar>
      
     
      <FilterSongs songs = {songs} applyFilter = {applyFilter}/>
      <DisplayMusic songs = {songs} getAllSongs= {getAllSongs}/>
      <AddSong getAllSongs= {getAllSongs}/>
     
      
    </div>
  );
}

export default App;
