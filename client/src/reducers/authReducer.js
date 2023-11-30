// authReducer.js

import { LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/authActionTypes.js";

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoggingIn: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
      };

    default:
      return state;
  }
};


export default authReducer;
