import React from "react";

export default function AnswerChoice({ choice, onClick }) {
  function handleClick() {
    onClick(choice);
  }
  return (
    <button
      onClick={handleClick}
      className=" p-4  bg-skyblue text-gray-700 hover:bg-purple focus:bg-purple  focus:text-white hover:text-white rounded-full"
    >
      {choice}
    </button>
  );
}
