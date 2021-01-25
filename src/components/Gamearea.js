import React from 'react';
import cardData from './Carddata';

const Gamearea = () => {
  const cards = cardData;

  return (
    <div>
      <ul>
        {cards.map((item) => {
          <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Gamearea;
