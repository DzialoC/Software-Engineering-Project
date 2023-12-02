// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice.js";
//import rootReducer from "./reducers/rootReducer.js"; // Import your root reducer

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
