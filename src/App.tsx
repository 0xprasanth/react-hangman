import React, { useState } from "react";
import words from "./wordList.json";
import './output.css'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // function to get random word from list
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div className=" max-w-4xl flex flex-col gap-8 my-0 mx-auto items-center">
      <div className=" text-4xl text-center font-mono ">Lose, Win</div>
    </div>
  );
};

export default App;
