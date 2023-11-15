import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store.js";

const root = document.getElementById("root");
const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
