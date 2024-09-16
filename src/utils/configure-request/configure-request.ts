import { sendMessage } from './send-message';
import type { SendMessageSettingsType } from './send-message';

export const configureRequest = (abortController: AbortController = new AbortController()) => {
  if (!(abortController instanceof AbortController)) {
    throw new TypeError('Wrong type of abortController.'
            + ' Expected: instance of "AbortController".'
            // @ts-expect-error
            + ` Received: instance of "${abortController?.constructor?.name}".`);
  }

  return {
    sendMessage: (settings: SendMessageSettingsType) => sendMessage({
      ...settings,
      signal: abortController.signal,
    }),
    cancel: (reason?: any) => abortController.abort(reason),
  };
};
