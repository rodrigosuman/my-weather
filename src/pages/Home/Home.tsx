import React from "react";
import { useDispatch } from "react-redux";
import CloudsSVG from "../../assets/svg/clouds.svg";
import HorizonSVG from "../../assets/svg/horizon.svg";
import HumiditySVG from "../../assets/svg/humidity.svg";
import PlaneSVG from "../../assets/svg/plane.svg";
import HomeCards from "../../components/HomeCards";
import useGeolocationContext from "../../hooks/useGeolocationContext";
import useTypedReduxSelector from "../../hooks/useTypedReduxSelector";
import { getMyWeatherAction } from "../../redux/actions/weather";
import { WeatherState } from "../../types/reducers";
import * as S from "./styles";



const Home: React.FC = () => {
  const weather = useTypedReduxSelector(
    (state) => state.weather?.data || ({} as WeatherState)
  );
  const geolocation = useGeolocationContext();

  console.log({ weather, geolocation });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMyWeatherAction(geolocation.coordinates));
  }, [geolocation, dispatch]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.HomeHeader>
          <h3>{weather.name}</h3>
        </S.HomeHeader>
        <S.HomeContent>
          <img
            src={` http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
            alt=""
          />
          <h1>
            {`${weather?.main?.temp}°`}, {weather?.weather?.[0]?.description}
          </h1>
        </S.HomeContent>
        <S.HomeCardList>
          <HomeCards
            title="Umidade"
            content={`${weather?.main?.humidity}%`}
            icon={() => <img alt="HumiditySVG.svg" src={HumiditySVG} />}
          />
          <HomeCards
            title="Nuvens"
            content={`${weather?.clouds?.all}%`}
            icon={() => <img alt="CloudsSVG.svg" src={CloudsSVG} />}
          />
          <HomeCards
            title="Visibilidade"
            content={`${weather?.visibility} m`}
            icon={() => <img alt="HorizonSVG.svg" src={HorizonSVG} />}
          />
          <HomeCards
            title="Ventos"
            content={`${Math.round(weather?.wind?.speed || 0)} km/h`}
            icon={() => <img alt="PlaneSVG.svg" src={PlaneSVG} style={{transform: `rotate(${weather?.wind?.deg}deg)`}}/>}
          />
        </S.HomeCardList>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
