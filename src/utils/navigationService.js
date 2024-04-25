let onUnauthorizedCallback = null;

export const setOnUnauthorizedCallback = (callback) => {
  onUnauthorizedCallback = callback;
};

export const handleUnauthorized = () => {
  if (onUnauthorizedCallback) {
    onUnauthorizedCallback();
  }
};
