// actions.js
import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

// Action creator for a login request
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// Action creator for a successful login
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// Action creator for a failed login
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Asynchronous action to perform the login
export const login = (credentials) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());

      // Send a login request to your backend API using Axios or any other method
      const response = await axios.post("/api/login", credentials);

      // Assuming the response contains user data
      const user = response.data;

      // Dispatch a successful login action with user data
      dispatch(loginSuccess(user));

      // Send a message to indicate successful login
      // You can extract the message from the response and use it in your application
      const message = response.data.message;
      // Dispatch an action with the message if needed
      // dispatch(loginMessage(message));
    } catch (error) {
      dispatch(loginFailure(error.message || "Login failed"));
    }
  };
};
