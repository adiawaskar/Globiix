// AttractionList.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './Attractions.css'; // Import common CSS file for styling

const Attractions = ({ destination, startDate, endDate }) => {
  const [attractions, setAttractions] = useState([]);

  // Function to fetch attractions from backend
  const fetchAttractions = async () => {
    try {
      const response = await axios.post('/api/attractions', {
        destination,
        startDate,
        endDate
      });
      setAttractions(response.data);
    } catch (error) {
      console.error('Error fetching attractions:', error);
    }
  };

  return (
    <div className="attraction-list">
      <h2>Attractions in {destination}</h2>
      <button onClick={fetchAttractions}>Fetch Attractions</button>
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction._id}>
            <span>{attraction.name}</span>
            <button>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attractions;
