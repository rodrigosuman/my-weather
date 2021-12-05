import actions from "../../constants/actions";
import type { Action, WeatherState } from "../../types/reducers";

type STATE = {
  data: WeatherState | null;
  loading: boolean;
};

const INITAL_STATE: STATE = {
  data: null,
  loading: false,
};

export default (state = INITAL_STATE, action: Action): STATE => {
  switch (action.type) {
    case actions.SET_MY_WEATHER:
      return { ...state, data: action.payload };

    case actions.SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
