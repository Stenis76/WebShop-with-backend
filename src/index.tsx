import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/fonts/ONEDAY.ttf";
import "./index.css";

import ApplicationContextProvider from "./contexts";

ReactDOM.render(
  <ApplicationContextProvider>
    <App />
  </ApplicationContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
