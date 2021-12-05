import { put, takeLatest } from "redux-saga/effects";
import actions from "../../constants/actions";
import {
  setMyWeatherAction
} from "../actions/weather";

function* onGetMyWeather(args: any): Generator<any, any, any> {
  try {
    yield put(setMyWeatherAction({ teste: "asdasdasd" } as any));
  } catch (error) {}
}

export default function* () {
  yield takeLatest(actions.GET_MY_WEATHER, onGetMyWeather);
}
