import React, { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import "./output.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // function to get random word from list
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
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
  // LOSER, if your have wrong guesses 6 times,
  // essentially 6 body parts to show
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

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
      <div className=" text-4xl text-center font-mono ">
        {
          isWinner && "Winner!, Refresh to try again"
        }
        {
          isLoser && "Nice try!, Refresh to try again"
        }
      </div>
      <HangmanDrawing numberOfGuess={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className=" self-stretch">
        <Keyboard
          disabled={isWinner || isLoser }
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default App;
