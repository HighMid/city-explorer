// src/components/WeatherDisplay.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';

const Weather = ({ forecasts }) => {
    if (!forecasts) {
        return <div>No weather data available.</div>;
    }

    return (
        <div>
            {forecasts.map((data, index) => (
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{data.date}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Weather;
