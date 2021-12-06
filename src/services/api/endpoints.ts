import api from ".";
import apiEndpoints from "../../constants/apiEndpoints";
import type { TCoordinates } from "../../types/contexts";
import type { WeatherState } from "../../types/reducers";

export const getMyCurrentWeather = (
  params: TCoordinates
): Promise<WeatherState> => {
  return api.get(apiEndpoints.WEATHER, {
    params,
  });
};
