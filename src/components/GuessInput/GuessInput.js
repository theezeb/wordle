import React, { useEffect, useState } from "react";
import RefreshGame from "../RefreshGame/RefreshGame";

function GuessInput({
  gameStatus,
  handleSubmitGuess,
  previousGuess,
  setPreviousGuess,
}) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.info({ guess: currentGuess });
    setCurrentGuess("");
    handleSubmitGuess(currentGuess);
  }

  function trackGuess(e) {
    let userGuess = e.target.value.toUpperCase();
    setCurrentGuess(userGuess);
  }

  return (
    <>
      <div className="guess-input-container">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="guess-input-wrapper"
        >
          <label htmlFor="guess-input">Enter guess:</label>
          <div className="input-refresh-container">
            <input
              id="guess-input"
              type="text"
              required
              value={currentGuess}
              minLength={5}
              maxLength={5}
              disabled={gameStatus !== "running" || previousGuess.length === 6}
              pattern="[a-zA-Z]{5}"
              title="5 letter word"
              onChange={trackGuess}
            />
            {gameStatus !== "running" && (
              <RefreshGame  setPreviousGuess={setPreviousGuess} />
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default GuessInput;
