import type { YMapLocationRequest, LngLat } from 'ymaps3';

export const COORDINATES: LngLat = [56.016678, 54.773872];
export const BOUNDS: [LngLat, LngLat] = [
  [53.697574, 53.291418],
  [59.064396, 56.081166],
];

export const LOCATION: YMapLocationRequest = {
  center: COORDINATES,
  zoom: 16,
};
