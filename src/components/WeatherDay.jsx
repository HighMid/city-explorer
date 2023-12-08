import Card from 'react-bootstrap/Card';
import React from 'react';

export default function WeatherDay({date, description}){

    return (
        <div>
            <strong>{date}</strong>
            <br /><strong>Temperature</strong><br />
            {description}
        </div>
    );
}

