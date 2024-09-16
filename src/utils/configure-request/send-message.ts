import axios, { type Cancel, type RawAxiosRequestHeaders } from 'axios';
import { noop } from 'lodash';
import { IS_ENV_DEVELOPMENT, LOCAL_STUBS_ENABLED } from '../../constants';
import { consoleLog, consoleError } from '../logger';

type EndpointType = {
  hasCustomErrorHandling?: boolean,
  headers?: RawAxiosRequestHeaders,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  name: string,
  stub?: boolean,
  stubFunc?: (message: any, params: Record<string, any>) => any,
  url: string,
};

export type SendMessageSettingsType = {
  endpoint: EndpointType,
  headers?: RawAxiosRequestHeaders,
  message?: any,
  params?: Record<string, any>,
  shouldSuppressError?: boolean,
  signal?: AbortSignal,
  silent?: boolean,
  url?: string,
};

export interface MaybeCancelError extends Cancel {
  isCanceled: boolean,
  cancelReason?: any,
}

const logRequest = (endpointName: string, message: any) => {
  consoleLog(`-> (to ${endpointName}): `, ...message);
};

const logResponse = (endpointName: string, message: any) => {
  consoleLog(`<- (from ${endpointName}): `, ...message);
};

export const sendMessage = ({
  endpoint,
  headers,
  message,
  params,
  shouldSuppressError = false,
  signal,
  silent = false,
  url,
}: SendMessageSettingsType): Promise<any> => {
  const {
    hasCustomErrorHandling = false,
    headers: endpointHeaders,
    method: endpointMethod,
    name: endpointName,
    stub: isStubEnabled = false,
    stubFunc = noop,
    url: endpointUrl = '',
  } = endpoint;

  if (IS_ENV_DEVELOPMENT && (LOCAL_STUBS_ENABLED || isStubEnabled)) {
    logRequest(endpointName, ['STUB:', message]);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const stubResult = stubFunc(message, params);
          logResponse(endpointName, ['STUB:', stubResult]);
          resolve(stubResult);
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  }

  const axiosParams = {
    data: message,
    headers: headers || endpointHeaders,
    method: endpointMethod,
    params,
    signal,
    url: url || endpointUrl,
  };

  logRequest(endpointName, [message]);

  return axios(axiosParams)
    .then((result: any) => {
      logResponse(endpointName, [result]);

      return result;
    })
    .catch((error) => {
      const isCancelled = axios.isCancel(error);
      const errorResponse = error.response;

      if (isCancelled) {
        // eslint-disable-next-line no-param-reassign
        (error as MaybeCancelError).isCanceled = true;
        // eslint-disable-next-line no-param-reassign
        (error as MaybeCancelError).cancelReason = signal?.reason;
      }

      if (!hasCustomErrorHandling) {
        if (isCancelled) {
          consoleLog(`Request "${endpointName}" was canceled by user`);
        } else {
          let errorMessage;

          if (errorResponse) {
            const { status, data: errorData } = errorResponse;

            if (status >= 500 && status < 600) {
              errorMessage = 'Internal server error';
            } else if (status === 404) {
              errorMessage = 'No data found';
            } else if (status === 401) {
              errorMessage = 'Access denied';
            } else if (status === 422) {
              errorMessage = 'Unprocessable entity';
            } else {
              errorMessage = JSON.stringify(errorData, null, 2);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            errorMessage = 'The request was sent, but no response was received';
          } else {
            // Something happened in setting up the request that triggered an Error
            errorMessage = error.message;
          }

          if (!silent && errorMessage) {
            consoleError(errorMessage);
          }
        }
      }

      if (!shouldSuppressError) {
        throw error;
      }

      return { data: undefined };
    });
};
