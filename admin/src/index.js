import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(
    <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
      ,
  document.getElementById("root")
);
