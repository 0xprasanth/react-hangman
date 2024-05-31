import React from "react";
import style from './keyboard.module.css'

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  disabled: boolean,
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({
  disabled=false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter
}: KeyboardProps) => {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);        
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            disabled={isInactive || isActive || disabled}
            className={`w-full border-black border-4 text-4xl p-2 font-bold cursor-pointer text-black aspect-square 
            ${style.btn}
            ${isActive ? style.active : "" }
            ${isInactive ? style.inactive : "" }

            `}
          >
            {key.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
