import React from 'react';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = (props) => {
  const { currentScore } = props;
  const { bestScore } = props;

  return (
    <header className="header">
      <div className="logo">Memory Game</div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
};

export default Header;
