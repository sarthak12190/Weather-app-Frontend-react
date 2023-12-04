import React, { useState } from 'react';
import axios from 'axios';

function SearchBar(props) {
 const [city, setCity] = useState('');

 const search = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/weather?city=${city}`);
      console.log(response.data);
      // Update your React component with the fetched weather data here
    } catch (error) {
      console.error(error);
    }
 };

 return (
    <form onSubmit={search}>
      <input
        type="text"
        placeholder="Search a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
 );
}

export default SearchBar;

