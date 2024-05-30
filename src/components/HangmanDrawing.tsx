import React from "react";

// drawing HEAD
const HEAD = (
  <div
    className=" absolute w-14 h-14 rounded-full border-black border-solid border-8"
    style={{
      top: "42px",
      right: "-23px",
    }}
  />
);

const BODY = (
  <div
    className=" absolute bg-black"
    style={{
      width: "10px",
      height: "120px",
      top: "95px",
      right: "0px",
    }}
  />
);

const RIGHT_HAND = (
  <div className=" absolute w-[100px] h-[10px] bg-black  -rotate-[30deg]  top-[125px] right-[-100px]  origin-bottom-left" />
);

const LEFT_HAND = (
  <div className=" absolute w-[100px] h-[10px] bg-black   top-[125px] right-[10px]  origin-bottom-right rotate-[30deg] " />
);

const RIGHT_LEG = (
  <div className="absolute w-[100px] h-[10px] bg-black  rotate-[60deg]  top-[200px] right-[-89px]  origin-bottom-left" />
);
const LEFT_LEG = (
  <div className="absolute w-[100px] h-[10px] bg-black 
  rotate-[-60deg]  top-[200px] right-[0px]  origin-bottom-right" />
);

const BODY_PARTS = [
  HEAD, BODY,
  RIGHT_HAND, LEFT_HAND,
  RIGHT_LEG, LEFT_LEG
]

type HangmanDrawingProps = {
  numberOfGuess: number
}
const HangmanDrawing = ({ numberOfGuess }: HangmanDrawingProps) => {
  // Static drawing
  return (
    <div className=" relative ">
      {
        BODY_PARTS.slice(0, numberOfGuess)
      }
      {/* h bar */}
      <div
        className=" absolute h-11 bg-black  top-0 right-0"
        style={{ width: "10px " }}
      />
      {/* h bar */}
      <div
        className=" h-3 bg-black"
        style={{
          width: "200px",
          marginLeft: "122px",
        }}
      />
      <div className=" h-96 w-3 bg-black" style={{ marginLeft: "122px" }} />

      {/* bottom bar */}
      <div className=" h-3 w-64 bg-black" />
    </div>
  );
};

export default HangmanDrawing;
