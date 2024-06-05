import React from "react";

function GuessResults({ previousGuess }) {
  return (
    <div className="guess-results">
      {previousGuess &&
        previousGuess.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;
