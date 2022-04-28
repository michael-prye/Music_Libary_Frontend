import Button from 'react-bootstrap/Button'
import axios from 'axios';


const DeleteButton = (props) => {
    async function deleteButton(){
        try{
            let response = await axios.delete('http://127.0.0.1:8000/api/music/' + props.id)
            console.log(response.data)
        }catch(ex){
            console.log(ex)
        }
        


    }


    return ( 
        <Button variant='danger' onClick={deleteButton}>DELETE</Button>

    );
}
 
export default DeleteButton;