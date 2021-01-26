import React from 'react';

const Card = (props) => {
  const { name } = props;
  const { image } = props;
  const { id } = props;

  const liftUp = (e) => {
    e.preventDefault();
    props.liftUp(id);
  };

  return (
    <li key={id} className="card" onClick={liftUp}>
      <img src={image} alt={name} />
    </li>
  );
};

export default Card;
