import { fork } from "redux-saga/effects";
import weatherSagas from "./weather";

export default function* () {
  yield fork(weatherSagas);
}
