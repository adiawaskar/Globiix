// Features.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';

const Features = () => {

  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="features-container">
      <div className="parallax2">
        <h1>What's your dream vacation?</h1>
        <div className="photo-grid">
          {/* Horizontal grid of photos */}
          <div className="photo" style={{backgroundImage: `url('photo1.jpg')`}}></div>
          <div className="photo" style={{backgroundImage: `url('photo2.jpg')`}}></div>
          <div className="photo" style={{backgroundImage: `url('photo4.jpg')`}}></div>
          <div className="photo" style={{backgroundImage: `url('photo3.jpg')`}}></div>
        
          {/* Add more photos as needed */}
        </div>
        <button className="view-more-btn" onClick={handleViewMoreClick}>View More</button>
      </div>
    </div>
  );
}

export default Features;

