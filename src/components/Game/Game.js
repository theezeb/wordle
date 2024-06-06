import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuess, setPreviousGuess] = useState([]);

  function handleSubmitGuess(currentGuess) {
    const checkedGuess = checkGuess(currentGuess, answer);
    setPreviousGuess([...previousGuess, checkedGuess]);
  }
  return (
    <>
      <GuessResults previousGuess={previousGuess} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        previousGuess={previousGuess}
      />
    </>
  );
}

export default Game;
