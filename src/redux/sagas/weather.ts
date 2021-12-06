import { call, put, takeLatest } from "redux-saga/effects";
import actions from "../../constants/actions";
import { getMyCurrentWeather } from "../../services/api/endpoints";
import {
  setLoadingMyWeatherAction,
  setMyWeatherAction
} from "../actions/weather";

function* onGetMyWeather(args: any): Generator<any, any, any> {
  try {
    const myCurrentWeather = yield call(() =>
      getMyCurrentWeather(args.payload)
    );

    yield put(setMyWeatherAction(myCurrentWeather));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setLoadingMyWeatherAction(false));
  }
}

function* weatherSagas() {
  yield takeLatest(actions.GET_MY_WEATHER, onGetMyWeather);
}

export default weatherSagas;
