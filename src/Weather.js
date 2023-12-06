// src/components/Weather.js

import React, { useState } from 'react';
import './Weather.css';
import { hydrate } from 'react-dom';
import pic from './weather img1.jpg'
const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      // const response = await fetch(`http://127.0.0.1:5000/api/weather?location=${location}`);
       const response = await fetch(`https://server-weather-l2c9.onrender.com/api/weather?location=${location}`);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
   
    <div className="weather-container">
      <b><h2>Weather App</h2></b>
      <img
            src= {pic}
            className="weather-image"
          />
          <br/>
          <br></br>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.location}</h2>
          <p>Temperature: {weatherData.temperature}K</p>
          <p>Humidity: {weatherData.humidity}%</p>
          
        </div>
        
      )}
    </div>
  );
};

export default Weather;


// src/components/Weather.js

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './Weather.css';
// import pic from './weather img1.jpg'


// const Weather = () => {
//   const [location, setLocation] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const getWeather = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/weather?location=${location}`);

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         throw new Error(`Error: ${response.status} - ${errorMessage}`);
//       }

//       const data = await response.json();
//       setWeatherData(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching weather data:', error.message);
//       setError('Error fetching weather data. Please try again.');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="weather-container p-4">
//       <img
//             src= {pic}
//             className="weather-image"
//           />
//         <div className="input-container mb-3">
//           <input
//             type="text"
//             placeholder="Enter Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="form-control"
//           />
//           <button onClick={getWeather} className="btn btn-primary">
//             Get Weather
//           </button>
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         {weatherData && (
//           <div className="weather-info">
//             <h2 className="mb-4">Weather in {weatherData.location}</h2>
//             <p>Temperature: {weatherData.temperature}K</p>
//             <p>Humidity: {weatherData.humidity}%</p>
//             {/* Uncomment the image when you have a valid image link */}
//             {/* <img src={weatherData.weatherImage} alt={`Weather: ${weatherData.weatherCondition}`} className="img-fluid" /> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Weather;

