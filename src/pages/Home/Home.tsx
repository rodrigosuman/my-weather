import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch } from "react-redux";
import CloudsSVG from "../../assets/svg/clouds.svg";
import HorizonSVG from "../../assets/svg/horizon.svg";
import HumiditySVG from "../../assets/svg/humidity.svg";
import PlaneSVG from "../../assets/svg/plane.svg";
import CurrentTime from "../../components/CurrentTime";
import HomeCards from "../../components/HomeCards";
import LoadingIndicator from "../../components/LoadingIndicator";
import useGeolocationContext from "../../hooks/useGeolocationContext";
import useTypedReduxSelector from "../../hooks/useTypedReduxSelector";
import {
  getMyWeatherAction,
  setLoadingMyWeatherAction
} from "../../redux/actions/weather";
import * as S from "./styles";

const Home: React.FC = () => {
  const { data: weather, loading: isLoading } = useTypedReduxSelector(
    (state) => state.weather
  );
  const geolocation = useGeolocationContext();

  const dispatch = useDispatch();

  const handleGetMyWeather = React.useCallback(() => {
    dispatch(setLoadingMyWeatherAction(true));

    dispatch(getMyWeatherAction(geolocation.coordinates));
  }, [dispatch, geolocation]);

  React.useEffect(() => {
    handleGetMyWeather();
  }, [handleGetMyWeather]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.HomeHeader>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <div>
              <h3>
                {weather?.name}, <CurrentTime />
              </h3>
            </div>
          )}
          <button onClick={handleGetMyWeather} type="button">
            <FiRefreshCw />
          </button>
        </S.HomeHeader>
        <S.HomeContent>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <React.Fragment>
              <img
                src={` http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
                alt=""
              />
              <h1>
                {`${weather?.main?.temp}°`},{" "}
                {weather?.weather?.[0]?.description}
              </h1>
            </React.Fragment>
          )}
        </S.HomeContent>
        <S.HomeCardList>
          <HomeCards
            isLoading={isLoading}
            title="Umidade"
            content={`${weather?.main?.humidity}%`}
            icon={() => <img alt="HumiditySVG.svg" src={HumiditySVG} />}
          />
          <HomeCards
            isLoading={isLoading}
            title="Nuvens"
            content={`${weather?.clouds?.all}%`}
            icon={() => <img alt="CloudsSVG.svg" src={CloudsSVG} />}
          />
          <HomeCards
            isLoading={isLoading}
            title="Visibilidade"
            content={`${weather?.visibility} m`}
            icon={() => <img alt="HorizonSVG.svg" src={HorizonSVG} />}
          />
          <HomeCards
            isLoading={isLoading}
            title="Ventos"
            content={`${Math.round(weather?.wind?.speed || 0)} km/h`}
            icon={() => (
              <img
                alt="PlaneSVG.svg"
                src={PlaneSVG}
                style={{ transform: `rotate(${weather?.wind?.deg}deg)` }}
              />
            )}
          />
        </S.HomeCardList>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
