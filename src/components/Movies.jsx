import React from 'react';
import { When } from 'react-if';
import Card from 'react-bootstrap/Card';

// const Movies = ({ movies }) => {
//     if (!movies || movies.length === 0) {
//         return <div>No movie data available.</div>;
//     }

//     return (
//         <div>
//             {movies.map((movie, index) => (
//                 <Card key={index}>
//                     <Card.Img variant="top" src={movie.image_url} />
//                     <Card.Body>
//                         <Card.Title>{movie.title}</Card.Title>
//                         <Card.Text>{movie.overview}</Card.Text>
//                     </Card.Body>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default Movies;

export default function Movies({ movies, searchMade }) {
    return (
        <div>
            <When condition={!searchMade}>
                {''}
            </When>

            <When condition={searchMade && (!movies || movies.length === 0)}>
                <div>No movie data available.</div>
            </When>

            <When condition={movies && movies.length > 0}>
                {movies.map((movie, index) => (
                    <Card key={index}>
                        <Card.Img variant="top" src={movie.image_url} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.overview}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </When>
        </div>
    );
}
