import React from 'react';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Memory Game</div>
    <Scoreboard />
  </header>
);

export default Header;
