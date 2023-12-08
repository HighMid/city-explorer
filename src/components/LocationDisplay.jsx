import React from 'react';
import Card from 'react-bootstrap/Card';
import Weather from './Weather';

export default function LocationDisplay({ info , weatherData}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Location</Card.Title>
                <Card.Text>
                    <div>Location Name: {info.display_name}</div>
                    <div>Latitude: {info.lat}</div>
                    <div>Longitude: {info.lon}</div>
                </Card.Text>
               {weatherData && <Weather forecasts={weatherData} />}
            </Card.Body>
        </Card>
    );
}