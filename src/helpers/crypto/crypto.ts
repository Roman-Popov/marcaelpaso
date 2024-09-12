import md5 from 'md5';
import { USER_DATA } from './user-data';

export const decrypt = async (login: string, password: string) => {
  const loginHash = md5(login);
  // eslint-disable-next-line no-bitwise
  const userKey = md5(loginHash.split('').map((value) => value.charCodeAt(0) ^ 1).join(''));

  const foundData = USER_DATA[userKey as keyof typeof USER_DATA];

  if (!foundData) {
    return null;
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const salt = encoder.encode(loginHash.substring(0, 16));
  const iv = encoder.encode(loginHash.substring(loginHash.length - 12));

  const keyMaterial = await window.crypto.subtle
    .importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits', 'deriveKey']);

  const key = await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );

  // @ts-ignore
  const message = Uint8Array.from(foundData.split(','));
  const decrypted = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, message);

  return decoder.decode(decrypted);
};
