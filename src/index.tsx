import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";

const apiKey = process.env.REACT_APP_API_KEY;
const link = "http://www.omdbapi.com/";
if (!apiKey) {
  alert(
    `"API key is missing. Please provide it in the .env file. You can obtain an API key from ${link} `
  );
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
