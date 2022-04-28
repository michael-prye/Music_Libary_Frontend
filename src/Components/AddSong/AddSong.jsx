import axios from 'axios'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'

const AddSong = (props) => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputArtist, setInputArtist] = useState('')
    const [inputAlbum, setInputAlbum] = useState('')
    const [inputAlbumArt, setInputAlbumArt] = useState('')
    const [inputGenre, setInputGenre] = useState('')
    const [inputDate, setInputDate] = useState('')


    async function addSong(){ 
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/music/', {
                title: inputTitle,
                artist: inputArtist,
                album: inputAlbum,
                album_art: inputAlbumArt,
                genre: inputGenre,
                release_date: inputDate,
                likes: "0"
            })
            props.getAllSongs();
            setInputTitle('');
            setInputArtist('');
            setInputAlbum('');
            setInputAlbumArt('');
            setInputGenre('');
            setInputDate('');


        }catch(response){
            console.log(response)
            
        }
    }
    function handleSubmit(event){
        event.preventDefault();
        addSong();
    }
    
    return (  
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={inputTitle} onChange={(event)=> setInputTitle(event.target.value)}/>
            <label>Artist</label>
            <input type="text" value={inputArtist} onChange={(event)=> setInputArtist(event.target.value)}/>
            <label>Album</label>
            <input type="text" value={inputAlbum} onChange={(event)=> setInputAlbum(event.target.value)}/>
            <label>Album Art</label>
            <input type="text" value={inputAlbumArt} onChange={(event)=> setInputAlbumArt(event.target.value)}/>
            <label>Genre</label>
            <input type="text" value={inputGenre} onChange={(event)=> setInputGenre(event.target.value)}/>
            <label>Date</label>
            <input type="date" value={inputDate} onChange={(event)=> setInputDate(event.target.value)}/>
            <Button type="submit">Add Song</Button>

        </form>
    );
}
 
export default AddSong;