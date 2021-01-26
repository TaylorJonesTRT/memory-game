import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Gamearea from './components/Gamearea';

const initialCardSelection = [];

function App() {
  const [selectedCards, setSelectedCards] = useState({ cardIds: [] });
  // Debating on keeping the following states here or moving to the Scoreboard component
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setCurrentScore(0);
    setSelectedCards({
      cardIds: initialCardSelection,
    });
  }, [bestScore]);

  const addSelected = (name) => {
    const selected = selectedCards.cardIds;
    if (selected.includes(name)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      } else {
        setSelectedCards({
          cardIds: initialCardSelection,
        });
        setCurrentScore(0);
      }
    } else {
      setSelectedCards({
        cardIds: [...selected, name],
      });
      setCurrentScore(currentScore + 1);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header currentScore={currentScore} bestScore={bestScore} />
        <Gamearea cardClick={addSelected} />
      </div>
    </div>
  );
}

export default App;
