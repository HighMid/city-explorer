import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LocationDisplay from './LocationDisplay';

export default function FormInput(props){

    const [locationInfo, setLocationInfo] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [mapUrl, setMapUrl] = useState('');
    

    const handleSubmit = async(event) => {
        event.preventDefault();

        const API_KEY = import.meta.env.VITE_API_KEY;
        const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
        
        try {
            const response = await axios.get(API);
            console.log("API Response:", response); // Log the entire response
    
            if (response.data && response.data.length > 0) {
                const locationData = response.data[0];
                console.log("Location Data:", locationData); // Log the location data
    
                setLocationInfo(locationData);
    
                if (locationData.lat && locationData.lon) {
                    const mapImage = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=10&size=400x400`;
                    setMapUrl(mapImage);
                } else {
                    console.error("Latitude and Longitude are undefined");
                }
            }
        }
        catch(error){
            console.error("Error fetching data: ", error);
            alert("Error fetching data: " + error);
        }
    };
    
        //     try {
    //         const response = await axios.get(API);
    //         setLocationInfo(response.data[0]);
    //         console.log(response);
    //         const mapImage = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${response.data.lat},${response.data.lon}&zoom=10`;
    //         setMapUrl(mapImage);
    //     }
    //     catch(error){
    //         console.error("Error fetching data: " , error);
    //         alert("Error fetching data" , error);
    //     }

        
    // };

    return(
        <div>
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
            {locationInfo && <LocationDisplay info={locationInfo} />}
            {mapUrl && <img src={mapUrl} alt="map" />}
        </div>
    );
}