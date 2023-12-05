import React from 'react';
import Card from 'react-bootstrap/Card';

export default function LocationDisplay({ info }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Location</Card.Title>
                <Card.Text>
                    <span>Location Name: {info.display_name}</span><br/>
                    <span>Latitude: {info.lat}</span><br/>
                    <span>Longitude: {info.lon}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}