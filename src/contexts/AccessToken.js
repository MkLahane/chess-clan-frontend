import { createContext } from "react";

const initialState = {
  accessToken: null,
  setAccessToken: () => {},
};

export const AccessTokenContext = createContext(initialState);
