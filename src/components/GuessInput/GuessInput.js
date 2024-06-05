import React, { useEffect, useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.info({ guess: currentGuess });
    setCurrentGuess("");
    handleSubmitGuess(currentGuess);
  }

  function trackGuess(e) {
    let userGuess = e.target.value.toUpperCase();
    setCurrentGuess(userGuess);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          value={currentGuess}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={trackGuess}
        />
      </form>
    </>
  );
}

export default GuessInput;
