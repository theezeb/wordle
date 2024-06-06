import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "./../../constants";
import ResultBanner from "../ResultBanner/ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuess, setPreviousGuess] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function handleSubmitGuess(currentGuess) {
    const checkedGuess = checkGuess(currentGuess, answer);
    const nextGuess = [...previousGuess, checkedGuess];
    setPreviousGuess(nextGuess);

    if (currentGuess === answer) {
      setGameStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResults previousGuess={previousGuess} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
        previousGuess={previousGuess}
      />
      {gameStatus !== "running" && (
        <ResultBanner
          gameStatus={gameStatus}
          numOfGuesses={previousGuess.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
