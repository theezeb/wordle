import React from "react";

function HappyBanner({ guessTaken }) {
  return (
    <div className="happy banner">
      <p>
        <strong>🎉 Congratulations! 🎉</strong> Got it in
        <strong>
          {" "}
          {guessTaken === 1 ? "1 guess 🥳" : `${guessTaken} guesses `}
        </strong>
        .
      </p>
    </div>
  );
}
function EndBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
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
