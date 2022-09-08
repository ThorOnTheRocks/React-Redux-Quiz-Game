import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from '../store/slices/gameInit';
import Button from "../components/Button";

const EndGamePage = () => {
  const dispatch = useDispatch()
  const answers = useSelector(state => state.quizSlice.answers)
  const score = useSelector(state => state.quizSlice.score)
  console.log(answers)

  const handleResetGame = () => {
    dispatch(resetGame())
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-purple-500 my-4">Game Over</h2>
      <p className="text-2xl mb-4">Your score was <span className="text-purple-400">{score}</span>/10</p>
      <Button onClick={handleResetGame}>Restart Game</Button>
      <div className="mt-4 p-4">
        {answers.map((answer) => {
          return (
            <div className="border-b-2 border-purple-500 flex justify-between bg-white">
              <p dangerouslySetInnerHTML={{ __html: answer.question }} key={Math.floor(Math.random() * 100)}
                className="p-2 mr-2"
              ></p>
              <span className={`p-2 ${answer.correctAnswer === answer.answer ? 'text-green-500' : 'text-red-500'}`}>{answer.answer} </span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default EndGamePage;
