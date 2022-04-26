const Song = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.artist}</h3>
            <h3>{props.album}</h3>
            <h3>{props.album_art}</h3>
            <h3>{props.release_date}</h3>
            <h3>{props.genre}</h3>
            <h3>{props.likes}</h3>

        </div>        
     );
}
 
export default Song;