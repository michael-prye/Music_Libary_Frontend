import DeleteButton from "./DeleteButton/DeleteButton";
import LikeButton from "./LikeButton/LikeButton";

const Song = (props) => {
    return (
        <div>
            <img src={props.album_art} alt="" />

            
            <h3>{props.title}</h3>
            <h3>{props.artist}</h3>
            <h3>{props.album}</h3>
            <h3>{props.release_date}</h3>
            <h3>{props.genre}</h3>
            <h3>{props.likes}</h3>
            <DeleteButton id ={props.id} getAllSongs = {props.getAllSongs}/>
            <LikeButton id = {props.id} getAllSongs = {props.getAllSongs}/>

        </div>        
     );
}
 
export default Song;