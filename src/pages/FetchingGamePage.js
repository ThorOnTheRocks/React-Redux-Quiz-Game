import React from "react";
import { cancelGame } from "../store/slices/gameInit";
import { useDispatch } from "react-redux";
import Button from "../components/Button";

const FetchingGamePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center mb-12">
        <div className="w-12 h-12 bg-purple-200 rounded-full animate-bounce"></div>
      </div>
      <Button onClick={() => dispatch(cancelGame())}>Cancel Game</Button>
    </div>
  );
};

export default FetchingGamePage;
