import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from '../store/slices/gameInit';

const EndGamePage = () => {
  const dispatch = useDispatch()
  const answers = useSelector(state => state.quizSlice.answers)
  const score = useSelector(state => state.quizSlice.score)
  console.log(answers)

  const handleResetGame = () => {
    dispatch(resetGame())
  }
  return (
    <div>
      <h2>Your answers</h2>
      <p>{score}</p>
      <ul>
        {answers.map((answer) => {
          return (
            <li key={Math.floor(Math.random() * 100)}>Question: {answer.question} - Your answer: {answer.answer} - Correct answer: {answer.correctAnswer}</li>
          )
        })}
      </ul>
      <button onClick={handleResetGame}>Restart Game</button>
    </div>
  );
};

export default EndGamePage;
