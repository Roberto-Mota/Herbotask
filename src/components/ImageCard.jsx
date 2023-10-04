import React from 'react';
import './ImageCard.css';

function ImageCard(props) {
  return (
    <div className="image-card">
      <img className="image-sizing" src={props.image} alt={props.title} />
    </div>
  );
}

export default ImageCard;