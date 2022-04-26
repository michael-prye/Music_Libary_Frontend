import Song from "../Song/Song"
const DisplayMusic = (props) => {
    return ( 
        <table>
            <tbody>
                {props.songs.map((song)=>{
                    return(
                        <tr><Song title = {song.title} artist={song.artist} album = {song.album} album_art={song.album_art} release_date = {song.release_date} genre={song.genre} likes={song.likes} /></tr>
                    )
                }

                )}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;