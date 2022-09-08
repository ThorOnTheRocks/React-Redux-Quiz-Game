import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shuffle } from "../utils/utils";
import { answerQuestion } from "../store/slices/game";
import { finishGame } from "../store/slices/gameInit";
import TimeLeft from "../components/TimeLeft";


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
    <div key={Math.floor(Math.random() * 100)}>
      <button onClick={() => handleAnswerQuestion(answer)}>{answer}</button>
    </div>
  ))


  console.log(currentAnswers)

  return (
    <div>
      <TimeLeft />
      <p>{score}</p>
      <p>{currentQuestionIndex}/10</p>
      <p dangerouslySetInnerHTML={{ __html: currentQuestion }}></p>
      {shuffledAnswers}
      <button onClick={handleRestartGame}>Quit Game</button>
    </div>
  );
};

export default GamePage;
