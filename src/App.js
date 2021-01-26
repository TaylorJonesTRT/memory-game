import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Gamearea from './components/Gamearea';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  useEffect(() => {}, [selectedCards]);

  const addSelected = (e) => {
    // TODO: Come back to this when cards are setup
    const oldSelected = selectedCards;
    setSelectedCards(...oldSelected, e.target.name);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Gamearea />
      </div>
    </div>
  );
}

export default App;
