import React, { useState } from 'react';
import axios from 'axios';
import './SearchComponent.css'; // Create a CSS file for styling

const SearchComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      console.log('Sending search request to server...');
      const response = await axios.post('http://localhost:5001/api/search', { startDate, endDate, city });
      console.log('Search response:', response.data);
      setSearchResults(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error.response ? error.response.data : error.message);
      setError('Failed to fetch data from the server.');
    }
  };

  return (
    <div>
      {searchResults.length === 0 ? (
        <div>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <div className="results-grid">
          {searchResults.map((result) => (
            <div className="card" key={result.id}>
              <h2>{result.name}</h2>
              {result.image && <img src={result.image} alt={result.name} />}
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
