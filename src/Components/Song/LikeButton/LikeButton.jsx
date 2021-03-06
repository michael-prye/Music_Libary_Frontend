import Button from 'react-bootstrap/Button'
import axios from 'axios';

const LikeButton = (props) => {
    async function likeButton(){
        try{
            let response = await axios.patch('http://127.0.0.1:8000/api/music/'+ props.id, {"likes": true})
            console.log(response.data)
            props.getAllSongs();
        }catch(ex){
            console.log(ex)
        }
    }

    return ( 
        <Button variant='success' onClick={likeButton}>LIKE</Button>
     );
}
 
export default LikeButton;