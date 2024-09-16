/* eslint-disable no-console */
import { first, truncate } from 'lodash';
import { LogLevels, LOG_LEVEL } from './logger-config';

const createLogMethod = (
  loggerFunc: (...attrs: any[]) => void,
  level: keyof typeof LogLevels
) => (...attrs: any[]) => {
  if (LOG_LEVEL <= level) {
    console.groupCollapsed(level, truncate(first(attrs)));
    loggerFunc(`[VR][${level}]`, ...attrs);
    console.groupEnd();
  }
};

export const consoleDebug = createLogMethod(console.debug, LogLevels.DEBUG);
export const consoleLog = createLogMethod(console.log, LogLevels.LOG);
export const consoleInfo = createLogMethod(console.info, LogLevels.INFO);
export const consoleWarn = createLogMethod(console.warn, LogLevels.WARN);
export const consoleError = createLogMethod(console.error, LogLevels.ERROR);
