import React from 'react';
import Card from './Card';

function CardList() {
  const cards = [
    {title: "Card 1", content: "First", color: "black"},
    {title: "Card 2", content: "Second", color: "green"},
    {title: "Card 3", content: "Third", color: "blue"},
  ];
  
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          content={card.content}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default CardList;