// SearchForm.jsx

import React, { useState } from 'react';
import './Search.css'; // Import CSS file for styling

const Search= ({ onSubmit }) => {
  // State variables to store destination and dates
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component for further processing
    onSubmit({ destination, startDate, endDate });
  };

  return (
    <React.Fragment>
      <div className="background_image" />
      <form className="search-form" onSubmit={handleSubmit}>
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Go</button>
      </form>
    </React.Fragment>
  );
};

export default Search;

