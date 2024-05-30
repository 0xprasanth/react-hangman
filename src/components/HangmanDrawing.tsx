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
  <div
    className=" absolute w-[100px] h-[10px] bg-black  -rotate-[30deg]  top-[150px] right-[-100px]  origin-bottom-left"

  />
);

const HangmanDrawing = () => {
  // Static drawing
  return (
    <div className=" relative ">
      {HEAD}
      {BODY}
      {RIGHT_HAND}
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
