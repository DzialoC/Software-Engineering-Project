// authActions.js

import { LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActionTypes.js";

export const logout = () => async(dispatch) => {
  console.log("It verks?");
};

export const loginRequest = () => {
  console.log("Requesting Works?");
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSucess = () => {
  console.log("Login Works?");
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  console.log("Login does not Works?");
  return {
    type: LOGIN_FAILURE,
  };
};
