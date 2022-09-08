import { combineReducers } from "redux";
import gameState from '../store/slices/gameInit';
import quizSlice from '../store/slices/game';

export default combineReducers({ gameState, quizSlice });