import { action } from "typesafe-actions";
import actions from "../../constants/actions";
import type { GetMyWheather } from "../../types/actions";
import type { WeatherState } from "../../types/reducers";

export const getMyWeatherAction = (args: GetMyWheather) => {
  return action(actions.GET_MY_WEATHER, args);
};

export const setMyWeatherAction = (args: WeatherState) => {
  return action(actions.SET_MY_WEATHER, args);
};

export const setLoadingMyWeatherAction = (value: boolean) => {
  return action(actions.SET_LOADING, value);
};

