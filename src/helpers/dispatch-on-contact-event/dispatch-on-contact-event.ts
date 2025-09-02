export const dispatchOnContactEvent = (): void => {
  const customEvent = new CustomEvent('onContactRequest', {
    bubbles: true,
    cancelable: true,
  });

  window.dispatchEvent(customEvent);
};
