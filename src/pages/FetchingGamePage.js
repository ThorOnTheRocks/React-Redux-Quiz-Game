import React from "react";
import { cancelGame } from "../store/slices/gameInit";
import { useDispatch } from "react-redux";

const FetchingGamePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Loading...</p>
      <button onClick={() => dispatch(cancelGame())}>Cancel Game</button>
    </div>
  );
};

export default FetchingGamePage;
