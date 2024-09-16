import { API_KEY } from '../../constants';

export const SCHEDULE_ENDPOINT = {
  method: 'GET' as const,
  name: 'SCHEDULE_ENDPOINT',
  url: 'https://api.github.com/repos/Roman-Popov/marcaelpaso-data/contents/schedule.json',
  headers: {
    authorization: API_KEY,
    accept: 'application/vnd.github.raw+json',
  },
};
