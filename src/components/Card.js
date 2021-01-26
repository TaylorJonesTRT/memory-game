import React from 'react';

const Card = (props) => {
  const cardName = props.name;
  const cardImage = props.image;
  const cardId = props.id;

  const liftUp = (e) => {
    e.preventDefault();
    props.liftName(e.target.name);
  };

  return (
    <li key={cardId} className="card" name={cardName} onClick={liftUp}>
      <img src={cardImage} alt={cardName} name={cardName} />
    </li>
  );
};

export default Card;
