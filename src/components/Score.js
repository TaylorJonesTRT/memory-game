import React from 'react';
import '../styles/Header.css';

const Score = (props) => {
  const { score } = props;

  return (
    <div className="score">
      <div className="score-name">{props.scoreTitle}</div>
      <div className="score-points">{score}</div>
    </div>
  );
};

export default Score;
