import React from "react";
import { Provider } from "react-redux";
import GeolocationContext from "./contexts/GeolocationContext";
import { store } from "./redux";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";

// import { Container } from './styles';

const AppContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <GeolocationContext>
          <Routes />
        </GeolocationContext>
      </ThemeProvider>
    </Provider>
  );
};

export default AppContainer;
