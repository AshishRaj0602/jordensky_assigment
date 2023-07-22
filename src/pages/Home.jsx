import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'; // Import the custom CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Website</h1>
      <div className="button-container">
        <Link to="/table" className="button">
          Table Page
        </Link>
        <Link to="/graph" className="button">
          Graph Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
