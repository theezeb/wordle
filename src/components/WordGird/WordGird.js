import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const cellName = status ? `cell ${status}` : "cell";
  return <span className={cellName}>{letter}</span>;
}

function WordGird({ guess }) {
  return (
    <>
      <p className="guess">
        {range(5).map((num, index) => (
          <Cell
            key={index}
            letter={guess ? guess[num].letter : undefined}
            status={guess ? guess[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default WordGird;
