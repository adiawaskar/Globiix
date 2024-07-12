import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="parallax">
        <div className="content">
          <h1>About us</h1>
          <p>
            Embark on a journey of discovery, where every click opens a gateway to new adventures. <br />
            Explore exotic destinations, from sun-kissed beaches to vibrant cityscapes, and let your wanderlust lead the way. Whether you crave the serenity of nature or the pulse of urban life, our curated selection of experiences promises to ignite your passion for exploration. <br /> 
            With expert recommendations and insider tips, we ensure that every trip is a seamless blend of excitement and relaxation.<br /> 
            Start planning your next escapade today and let us be your compass to unforgettable memories. Welcome to a world where the thrill of travel knows no bounds.
          </p>
        </div>
        <div className="image-container">
          <img src="/travel1.png" alt="Travel" className="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
