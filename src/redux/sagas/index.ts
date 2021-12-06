import { fork } from "redux-saga/effects";
import weatherSagas from "./weather";

function* sagas() {
  yield fork(weatherSagas);
}

export default sagas;
