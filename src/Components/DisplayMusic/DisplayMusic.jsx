import Song from "../Song/Song";
import React from "react";
import "./DisplayMusic.css"
//import Carousel from 'react-bootstrap/Carousel'





const DisplayMusic = (props) => {
    return (
        <table>
            <tbody className="grid" >
                {props.songs.map((song)=>{
                    return(
                        <td><Song getAllSongs = {props.getAllSongs} id = {song.id}title = {song.title} artist={song.artist} album = {song.album} album_art={song.album_art} release_date = {song.release_date} genre={song.genre} likes={song.likes} /></td>
                    )
                }

                )}
            </tbody>
        </table>

        //         <Carousel cols={2} rows={1} gap={10} loop>
        //     {props.songs.map((song)=>{
        //         return(
        //             <Carousel.Item>
        //                 <Song title = {song.title} artist={song.artist} album = {song.album} album_art={song.album_art} release_date = {song.release_date} genre={song.genre} likes={song.likes} />                        
        //             </Carousel.Item>
        //         )
        //     }
        //     )}
        // </Carousel>


    );
}
 
export default DisplayMusic;
