// authActions.js

import { LOGOUT } from "./authActionTypes.js";

export const logout = () => {
  console.log("It verks?");
  return {
    type: LOGOUT,
  };
};
