import { IS_ENV_PRODUCTION, IS_ENV_TEST } from '../../constants';

export enum LogLevels {
  DEBUG = 'DEBUG',
  LOG = 'LOG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

export const LOG_LEVEL = IS_ENV_PRODUCTION || IS_ENV_TEST
  ? 'ZERO_LOG'
  : process.env.LOG_LEVEL || LogLevels.DEBUG;
