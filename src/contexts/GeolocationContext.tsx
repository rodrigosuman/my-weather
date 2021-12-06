import React from "react";
import PermissionDinedOrLocationError from "../pages/PermissionDinedOrLocationError/PermissionDinedOrLocationError";
import { TCoordinates, TGeolocationContext } from "../types/contexts";

export const GeolocationContextProvider =
  React.createContext<TGeolocationContext>({} as TGeolocationContext);

const GeolocationContext: React.FC = (props) => {
  const [coordinates, setCoordinates] = React.useState<TCoordinates>(
    {} as TCoordinates
  );
  const [error, setError] = React.useState(true);

  const getLocation = React.useCallback(() => {
    navigator.permissions
      .query({
        name: "geolocation",
      })
      .then(() => {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            setCoordinates({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
            setError(false);
          },
          function () {
            setError(true);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      });
  }, []);

  React.useLayoutEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <GeolocationContextProvider.Provider
      value={{
        coordinates,
        getLocation,
      }}
    >
      {error ? <PermissionDinedOrLocationError /> : props.children}
    </GeolocationContextProvider.Provider>
  );
};

export default GeolocationContext;
