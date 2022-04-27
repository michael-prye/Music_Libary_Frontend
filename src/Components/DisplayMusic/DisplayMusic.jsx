import Song from "../Song/Song";
import React from "react";
import { Carousel } from "bootstrap";





const DisplayMusic = (props) => {
    const song = props.song;
    return (
        <Carousel>
            {song.map((song)=>{
                return(
                    <Carousel.Item>
                        <Song title = {song.title} artist={song.artist} album = {song.album} album_art={song.album_art} release_date = {song.release_date} genre={song.genre} likes={song.likes} />                        
                    </Carousel.Item>
                )
            }
            )}
        </Carousel>

        // <table>
        //     <tbody>
        //         {props.songs.map((song)=>{
        //             return(
        //                 <tr><Song title = {song.title} artist={song.artist} album = {song.album} album_art={song.album_art} release_date = {song.release_date} genre={song.genre} likes={song.likes} /></tr>
        //             )
        //         }

        //         )}
        //     </tbody>
        // </table>


    );
}
 
export default DisplayMusic;

// {props.songs.map((song)=>{
//     return(
//         <tr><Song title = {song.title} artist={song.artist} album = {song.album} album_art={song.album_art} release_date = {song.release_date} genre={song.genre} likes={song.likes} /></tr>
//     )
// }

// )}