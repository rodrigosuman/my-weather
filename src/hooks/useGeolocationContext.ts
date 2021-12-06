import React from "react";
import { GeolocationContextProvider } from "../contexts/GeolocationContext";

const useGeolocationContext = () => {
  return React.useContext(GeolocationContextProvider);
};

export default useGeolocationContext;
