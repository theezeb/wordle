import React from "react";
import WordGird from "../WordGird/WordGird";
import { NUM_OF_GUESSES_ALLOWED } from "./../../constants";
import { range } from "../../utils";

function GuessResults({ previousGuess }) {
  console.info({ previousGuess });
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <WordGird key={num} guess={previousGuess[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
