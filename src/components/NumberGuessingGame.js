import React, { useState } from 'react';
import './NumberGuessingGame.css';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber(1, 10));
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = () => {
    const guessNumber = parseInt(guess, 10);
    if (isNaN(guessNumber)) {
      setFeedback('Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (guessNumber < targetNumber) {
      setFeedback('Too low! Try again.');
    } else if (guessNumber > targetNumber) {
      setFeedback('Too high! Try again.');
    } else {
      setFeedback(`Correct! You found the number in ${attempts + 1} attempts.`);
    }
  };

  const handleResetGame = () => {
    setTargetNumber(generateRandomNumber(1, 10));
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <div className="game-container">
      <h1>Number Guessing Game</h1>
      <input
        type="number"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Enter your guess"
      />
      <div>
        <button onClick={handleGuessSubmit}>Submit Guess</button>
        <button onClick={handleResetGame}>Reset Game</button>
      </div>
      <p className="feedback">{feedback}</p>
      <p className="attempts">Number of attempts: {attempts}</p>
    </div>
  );
};

export default NumberGuessingGame;
