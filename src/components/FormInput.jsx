import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FormInput(props){

    const [searchQuery, setSearchQuery] = useState('');

    

    const handleSubmit = async(event) => {
        event.preventDefault();

        const API_KEY = import.meta.env.VITE_API_KEY;
        const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=$q=${searchQuery}&format=json`;
        
        try {
            const response = await axios.get(API);
            console.log(response);
        }
        catch(error){
            console.error("Error fetching data: " , error);
        }
    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter Location"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                 />
            </Form.Group>
            <Button variant="primary" type="submit">Explore!</Button>
        </Form>


    );
}