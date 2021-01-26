import React from 'react';
import cardData from './Carddata';
import '../styles/Gamearea.css';
import Card from './Card';

const Gamearea = () => {
  const cards = cardData;
  // Shuffling the array of cards using the Durstenfeld shuffle
  const shuffledCards = cards.sort(() => Math.random() - 0.5);
  const indexNum = 10;
  const renderedCards = shuffledCards.slice(0, indexNum).map((card) => card);

  return (
    <div className="gamearea">
      <ul className="gamearea">
        {renderedCards.map((card) => (
          <Card name={card.name} image={card.image} id={card.id} key={card.id} />
        ))}
      </ul>
    </div>
  );
};

export default Gamearea;
