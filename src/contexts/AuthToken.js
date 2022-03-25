let accessToken = "";

export const setAuthToken = (s) => {
  accessToken = s;
};

export const getAuthToken = () => {
  return accessToken;
};
