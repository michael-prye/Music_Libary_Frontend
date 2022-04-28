import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSong from './Components/AddSong/AddSong';
import FilterSongs from './Components/FilterSongs/FilterSongs';

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
     
      <FilterSongs songs = {songs} applyFilter = {applyFilter}/>
      <DisplayMusic songs = {songs} getAllSongs= {getAllSongs}/>
      <AddSong/>
     
      
    </div>
  );
}

export default App;
