import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../store/slices/gameInit";

const StartGamePage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startGame({ username }))
  }

  return (
    <div>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter your name..."
      />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default StartGamePage;
