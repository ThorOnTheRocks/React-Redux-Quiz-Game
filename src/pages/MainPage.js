import React from "react";
import * as stages from '../utils/constants';
import { useSelector } from "react-redux";
import StartGamePage from "./StartGamePage";
import FetchingGamePage from "./FetchingGamePage";
import GamePage from "./GamePage";
import EndGamePage from "./EndGamePage";

const MainPage = () => {
  const currentStage = useSelector(state => state.gameState.stage)
  let displayedPage;

  switch (currentStage) {
    case stages.START_GAME:
      displayedPage = <StartGamePage />
      break;
    case stages.FETCHING_GAME:
      displayedPage = <FetchingGamePage />
      break;
    case stages.GAME:
      displayedPage = <GamePage />
      break;
    case stages.END_GAME:
      displayedPage = <EndGamePage />
      break;
    default:
      break;
  }
  return (
    <div className="font-mono bg-purple-50 min-h-screen">
      <h1 className="bg-purple-500 text-white p-4 text-2x1 text-center">REDUX SAGA QUIZ GAME</h1>
      {displayedPage}
    </div>
  );
};

export default MainPage;
