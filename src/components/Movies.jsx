import React from 'react';
import Card from 'react-bootstrap/Card';

const Movies = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <div>No movie data available.</div>;
    }

    return (
        <div>
            {movies.map((movie, index) => (
                <Card key={index}>
                    <Card.Img variant="top" src={movie.image_url} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.overview}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Movies;
