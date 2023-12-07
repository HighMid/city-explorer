import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LocationDisplay from './LocationDisplay';
import Weather from './Weather';
import Movies from './Movies';

export default function FormInput(){

    const [locationInfo, setLocationInfo] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [mapUrl, setMapUrl] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [movies, setMovies] = useState([]);

    

    const handleSubmit = async(event) => {
        event.preventDefault();

        const API_KEY = import.meta.env.VITE_API_KEY;
        const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
        
        try {
            const response = await axios.get(API);
    
            if (response.data && response.data.length > 0) {
                const locationData = response.data[0];
    
                setLocationInfo(locationData);
    
                if (locationData.lat && locationData.lon) {
                    const mapImage = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=10&size=400x400`;
                    setMapUrl(mapImage);
                    handleWeatherFetch(locationData.lat, locationData.lon);
                    handleMovieFetch(searchQuery);
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

    const handleWeatherFetch = async (lat, lon) => {
        try {
            const weatherResponse = await axios.get(`http://localhost:3000/weather`, {
                params: { lat, lon }
            });
            setWeatherData(weatherResponse.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleMovieFetch = async (city) => {
        try {
            const movieResponse = await axios.get(`http://localhost:3000/movies`, {
                params: { city }
            });
            setMovies(movieResponse.data);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };
    
    // Call this function inside handleSubmit after setting the location info
    
    
    
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
            {weatherData && <Weather forecasts={weatherData} />}
            {movies && <Movies movies={movies} />}
        </div>
    );
}