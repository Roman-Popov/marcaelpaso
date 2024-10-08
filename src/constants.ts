export const IS_ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_ENV_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_ENV_TEST = process.env.NODE_ENV === 'test';

export const API_KEY = String(process.env.REACT_APP_API_KEY_PART_1) + String(process.env.REACT_APP_API_KEY_PART_2);
export const DOMAIN = process.env.REACT_APP_DOMAIN;
export const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER;
export const TELEGRAM_ID = process.env.REACT_APP_TELEGRAM_ID;
export const LOCAL_STUBS_ENABLED = process.env.REACT_APP_LOCAL_STUBS_ENABLED;

export const DEV_TELEGRAM_ID = process.env.REACT_APP_DEV_TELEGRAM_ID;
export const DEV_EMAIL = process.env.REACT_APP_DEV_EMAIL;
