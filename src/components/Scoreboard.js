import React from 'react';
import Score from './Score';
import '../styles/Header.css';

const Scoreboard = () => (
  <div className="scoreboard">
    <Score />
    <Score />
  </div>
);

export default Scoreboard;
