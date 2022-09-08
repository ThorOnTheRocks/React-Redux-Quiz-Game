import { take, fork, call, put, delay, cancel } from 'redux-saga/effects';
import { cancelGame, startGame } from '../slices/gameInit';
import { fetchTriviaApi } from '../../utils/api';
import { fetchQuizSuccess, fetchQuizFailed } from '../slices/game';

function* fetchingQuestionsSaga() {
  try {
    yield delay(2000);
    const data = yield call(fetchTriviaApi);
    console.log(data)
    yield put(fetchQuizSuccess(data))
  } catch (err) {
    yield put(fetchQuizFailed(err.message));
  }
}

function* cancelFetchQuiz(forkedSaga) {
  while (true) {
    yield take(cancelGame.type)
    yield cancel(forkedSaga);
  }
}

export default function* startGameSaga() {
  while (true) {
    yield take(startGame.type)
    const forkedSaga = yield fork(fetchingQuestionsSaga);
    yield fork(cancelFetchQuiz, forkedSaga)
  }
}