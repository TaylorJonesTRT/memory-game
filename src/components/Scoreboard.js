import React from 'react';
import Score from './Score';
import '../styles/Header.css';

const Scoreboard = (props) => (
  <div className="scoreboard">
    <Score scoreTitle="Current Score: " score={props.currentScore} />
    <Score scoreTitle="Best Score: " score={props.bestScore} />
  </div>
);

export default Scoreboard;
