import React from "react";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal  ?: boolean
};

const HangmanWord = ({ guessedLetters, wordToGuess, reveal=false }: HangmanWordProps) => {
  return (
    <div className="flex gap-6 text-8xl font-mono uppercase font-medium ">
      {wordToGuess.split("").map( (letter, index) => (
        <span key={index} className=" border-b-[0.1em] border-black ">
          <span
            style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", 
              color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}
            
            >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
