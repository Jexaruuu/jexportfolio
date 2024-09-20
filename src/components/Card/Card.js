import React from 'react';
import './Card.css'; 

function Card({ imgSrc, description }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={description} className="card-image" />
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
