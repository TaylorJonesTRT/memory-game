import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Gamearea from './components/Gamearea';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  useEffect(() => {}, [selectedCards]);

  const addSelected = (id) => {
    // TODO: Need to check for the ID in the selectedCards state array
    // TODO: If there need to start game over and log score if higher than best
    // TODO: If not there, add to state array and add +1 to current score
    const oldSelected = selectedCards;
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Gamearea cardClick={addSelected} />
      </div>
    </div>
  );
}

export default App;
