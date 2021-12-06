import { put, takeLatest } from "redux-saga/effects";
import actions from "../../constants/actions";
import { setMyWeatherAction } from "../actions/weather";

function* onGetMyWeather(args: any): Generator<any, any, any> {
  try {
    console.log({ args });

    yield put(
      setMyWeatherAction({
        coord: {
          lon: -48.5179,
          lat: -22.8777,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "céu limpo",
            icon: "01d",
          },
        ],
        base: "stations",
        main: {
          temp: 25.83,
          feels_like: 25.67,
          temp_min: 25.83,
          temp_max: 25.83,
          pressure: 1015,
          humidity: 46,
          sea_level: 1015,
          grnd_level: 920,
        },
        visibility: 10000,
        wind: {
          speed: 3.21,
          deg: 93,
          gust: 2.87,
        },
        clouds: {
          all: 0,
        },
        dt: 1638628134,
        sys: {
          country: "BR",
          sunrise: 1638606046,
          sunset: 1638654500,
        },
        timezone: -10800,
        id: 6322151,
        name: "Botucatu",
        cod: 200,
      } as any)
    );
  } catch (error) {}
}

function* weatherSagas() {
  yield takeLatest(actions.GET_MY_WEATHER, onGetMyWeather);
}

export default weatherSagas;
