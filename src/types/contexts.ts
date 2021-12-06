export type TCoordinates = { lat: number; lon: number };

export type TGeolocationContext = {
  coordinates: TCoordinates;
  getLocation: () => void
};
