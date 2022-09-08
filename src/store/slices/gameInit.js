import * as stages from '../../utils/constants';
import { createSlice } from '@reduxjs/toolkit';
import { fetchQuizSuccess, fetchQuizFailed } from './game';

const initialState = {
  stage: stages.START_GAME,
  username: ''
}

const gameState = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    startGame(state, action) {
      state.stage = stages.FETCHING_GAME;
      state.username = action.payload.username;
    },
    cancelGame(state) {
      state.stage = stages.START_GAME;
    },
    finishGame(state) {
      state.stage = stages.END_GAME;
    },
    resetGame(state) {
      state.stage = stages.START_GAME;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizSuccess, (state) => {
        state.stage = stages.GAME;
      })
      .addCase(fetchQuizFailed, (state) => {
        state.stage = stages.START_GAME;
      })
  }
})

export const { startGame, cancelGame, finishGame, resetGame } = gameState.actions;

export default gameState.reducer;