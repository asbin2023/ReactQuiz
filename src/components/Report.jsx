import React from "react";
import trophyImg from "../assets/quiz-complete.png";

export default function Report({ responses }) {
  let answeredCorrectly = 0;
  let answeredIncorrectly = 0;
  let questionsLength = responses.length;

  const renderedResponses = responses.map((res, idx) => {
    const isCorrect = res.usersChoice === res.correctChoice;

    if (isCorrect) {
      answeredCorrectly++;
    } else {
      answeredIncorrectly++;
    }
    return (
      <div key={idx} className="flex flex-col gap-1 items-center">
        <div className="mb-2 bg-black px-3 py-1.5  text-slate-300 rounded-[50%]">
          {idx + 1}
        </div>
        <h2 className="opacity-80">{res.question}</h2>
        <p
          className={`font-semibold ${
            isCorrect ? "text-green-800" : "text-red-800"
          }`}
        >
          {res.usersChoice}
        </p>
      </div>
    );
  });
  answeredCorrectly = parseInt((answeredCorrectly / questionsLength) * 100);
  answeredIncorrectly = parseInt((answeredIncorrectly / questionsLength) * 100);
  return (
    <div
      id="report"
      className="flex  flex-col gap-7 my-20 mx-auto w-full max-w-[700px] rounded-lg p-10 py-15 items-center"
    >
      <div className="flex flex-col items-center gap-6">
        <img
          id="trophy"
          className="p-3.5 border-2 border-gray-800 rounded-[50%]"
          width={100}
          src={trophyImg}
          alt=""
        />
        <h1 className="text-4xl font-semibold">QUIZ COMPLETED!</h1>
      </div>
      <div className="opacity-55 flex justify-center gap-10">
        <div>
          <p className="text-3xl ">{answeredCorrectly}%</p>
          <p className="text-sm">
            ANSWERED <br />
            CORRECTLY
          </p>
        </div>
        <div>
          <p className="text-3xl ">{answeredIncorrectly}%</p>
          <p className="text-sm">
            ANSWERED <br /> INCORRECTLY
          </p>
        </div>
      </div>
      <hr className="border w-4/6 border-black " />
      <div className="flex flex-col gap-7">{renderedResponses}</div>
    </div>
  );
}
