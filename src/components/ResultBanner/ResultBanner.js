import React from "react";

function HappyBanner({ guessTaken }) {
  return (
    <div className="happy banner">
      <p>
        <strong>
          {" "}
          {guessTaken === 1 ? "1st guess 🥳" : `in ${guessTaken} guesses `}
        </strong>
      </p>
    </div>
  );
}
function EndBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Word is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function ResultBanner({ gameStatus, numOfGuesses, answer }) {
  // console.info({ gameStatus });
  return (
    <>
      {gameStatus === "won" ? (
        <HappyBanner guessTaken={numOfGuesses} />
      ) : (
        <EndBanner answer={answer} />
      )}
    </>
  );
}

export default ResultBanner;
