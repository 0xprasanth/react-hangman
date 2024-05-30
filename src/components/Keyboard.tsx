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

const Keyboard = () => {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button
            key={key}
            className={`w-full border-black border-4 text-4xl p-2 font-bold cursor-pointer text-black aspect-square 
            ${style.btn}
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
