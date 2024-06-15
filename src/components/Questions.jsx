import React, { useState } from "react";
import questionsList, { shuffle } from "../assets/questions";
import AnswerChoice from "./AnswerChoice";
import Report from "./Report";
import quizLogo from "../assets/quiz-logo.png";

const lastQuestionIdx = questionsList.length - 1;

export default function Questions() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [responses, setResponses] = useState([]);

  if (currentQuestionIdx > lastQuestionIdx) {
    return <Report responses={responses} />;
  }

  const question = questionsList[currentQuestionIdx];
  const correctChoice = question.answers[0];
  shuffle(question.answers);

  function handleClick(choice) {
    console.log(choice);
    setResponses((prev) => {
      return [
        ...prev,
        { question: question.text, usersChoice: choice, correctChoice },
      ];
    });
    setCurrentQuestionIdx((prev) => prev + 1);
  }
  const renderedChoices = question.answers.map((choice) => {
    return (
      <AnswerChoice
        key={crypto.randomUUID()}
        choice={choice}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="w-full h-screen  flex flex-col items-center pt-20 gap-5">
      <div className="flex flex-col  items-center gap-3">
        <img src={quizLogo} width={40} alt="" />
        <h1 id="gradient-header" className="text-3xl font-semibold">
          R E A C T Q U I Z{" "}
        </h1>
      </div>
      <div
        id="quiz"
        className="p-12  rounded-xl m-5  flex flex-col items-center gap-8"
      >
        <h2 className="text-2xl text-lilac ">{question.text}</h2>
        <div className="flex flex-col w-[700px] gap-3">{renderedChoices}</div>
      </div>
    </div>
  );
}
