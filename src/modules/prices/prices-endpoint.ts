import { API_KEY } from '../../constants';

export const PRICES_ENDPOINT = {
  method: 'GET' as const,
  name: 'PRICES_ENDPOINT',
  url: 'https://api.github.com/repos/Roman-Popov/marcaelpaso-data/contents/prices.json',
  headers: {
    authorization: API_KEY,
    accept: 'application/vnd.github.raw+json',
  },
};
