import React from "react";
import style from './keyboard.module.css'

const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
        console.log(isActive);
        
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
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
