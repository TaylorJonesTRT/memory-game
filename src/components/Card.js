import React from 'react';

const Card = (props) => {
  const { name } = props;
  const { image } = props;
  const { id } = props;

  return (
    <li key={id} className="card">
      <img src={image} alt={name} />
    </li>
  );
};

export default Card;
