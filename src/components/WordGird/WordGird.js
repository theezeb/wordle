import React from "react";
import { range } from "../../utils";

function WordGird({ guess }) {
  return (
    <>
      <p className="guess">
        {range(5).map((num, index) => (
          <span key={index} className="cell">
            {guess ? guess[num] : undefined}
          </span>
        ))}
      </p>
    </>
  );
}

export default WordGird;
