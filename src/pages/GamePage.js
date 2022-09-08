import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shuffle } from "../utils/utils";
import { answerQuestion } from "../store/slices/game";
import { finishGame } from "../store/slices/gameInit";
import TimeLeft from "../components/TimeLeft";
import Button from "../components/Button";


const GamePage = () => {
  const dispatch = useDispatch();

  const currentQuestion = useSelector(
    (state) => state.quizSlice.questions[state.quizSlice.currentQuestionIndex].question
  );

  const currentAnswers = useSelector(
    (state) => shuffle(state.quizSlice.questions[state.quizSlice.currentQuestionIndex].incorrect_answers.concat(state.quizSlice.questions[state.quizSlice.currentQuestionIndex].correct_answer))
  )

  const score = useSelector(
    state => state.quizSlice.score
  );

  const currentQuestionIndex = useSelector(
    state => state.quizSlice.currentQuestionIndex
  )

  const handleAnswerQuestion = (answer) => {
    dispatch(answerQuestion({ answer }))
  }

  const handleRestartGame = () => {
    dispatch(finishGame())
  }

  const shuffledAnswers = currentAnswers.map(answer => (
    <>
      <Button addClassName="mx-4" onClick={() => handleAnswerQuestion(answer)}>{answer}</Button>
    </>
  ))


  console.log(currentAnswers)

  return (
    <>
      <div className="flex flex-col items-center relative">
        <TimeLeft />
        <p className="absolute top-4 left-4 text-2xl text-purple-500">{score}</p>
        <p className="absolute top-4 right-4 text-2xl text-purple-500">{currentQuestionIndex}/10</p>
        <p
          dangerouslySetInnerHTML={{ __html: currentQuestion }}
          className="p-7 bg-white rounded shadow">
        </p>

        <div className="flex justify-center w-96 mt-8" key={Math.floor(Math.random() * 100)}>
          {shuffledAnswers}
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <Button onClick={handleRestartGame} type="error">Quit Game</Button>
      </div>
    </>
  );
};

export default GamePage;
