// src/components/WeatherDisplay.jsx
import React from 'react';
import { When } from 'react-if';
import WeatherDay from './WeatherDay';

// export default function Weather({ forecasts }){
//     if (!forecasts || forecasts.length === 0) {
//         return <div>No weather data available.</div>;
//     }

//     return (
//         <div>
//             {forecasts.map((forecast, index) => (
//                 <WeatherDay 
//                     key={index} 
//                     date={forecast.date} 
//                     description={forecast.description} 
//                 />
//             ))}
//         </div>
//     );
// }

export default function Weather({ forecasts }){
    return (
        <div>
            <When condition={forecasts === null}>
                {''}
            </When>

            <When condition={forecasts && forecasts.length === 0}>
                <div>No weather data available.</div>
            </When>

            <When condition={forecasts && forecasts.length > 0}>
                {forecasts.map((forecast, index) => (
                    <WeatherDay key={index} date={forecast.date} description={forecast.description} />
                ))}
            </When>
        </div>
    );
}
