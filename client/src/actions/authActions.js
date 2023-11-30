// authActions.js

import { LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActionTypes.js";

export const logout = () => {
  console.log("It verks?");
  return {
    type: LOGOUT,
  };
};

export const loginRequest = () => {
  console.log("Works?");
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSucess = () => {
  console.log("Works?");
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  console.log("Works?");
  return {
    type: LOGIN_FAILURE,
  };
};
