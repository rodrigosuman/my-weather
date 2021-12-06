export type TCoordinates = { lat: number; lng: number };

export type TGeolocationContext = {
  coordinates: TCoordinates;
  getLocation: () => void
};
