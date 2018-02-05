import React from 'react';

import { Link } from 'react-router-dom';

const Home = ({ landmarkData }) => (landmarkData !== null ? (
  <div>
    {landmarkData.map(landmark => (
      <h3 key={landmark.id}><Link to={`/landmarks/${landmark.id}`}> {landmark.name} </Link></h3>
    ))}
  </div>
) : (
  <p> Landmark Loading.... </p>
));

export default Home;
