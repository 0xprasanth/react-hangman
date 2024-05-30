import React, { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import "./output.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // function to get random word from list
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  console.log(wordToGuess);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    // EVENT LISTENER
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      // regular exp
      // if we press A-Z
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    // ADDING to DOCUMENT
    document.addEventListener("keypress", handler);

    // REMOVING from DOCUMENT
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className=" max-w-4xl flex flex-col gap-8 my-0 mx-auto items-center">
      <div className=" text-4xl text-center font-mono ">Lose, Win</div>
      <HangmanDrawing numberOfGuess={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className=" self-stretch">
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
