import React from 'react';
import './Card.css';

function Card({ title, content, color }) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="card" style={{ borderColor: color }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button 
        className="card-button" 
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        Click Me!
      </button>
    </div>
  );
}

export default Card;