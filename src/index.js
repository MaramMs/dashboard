import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />, document.getElementById("root")
  </ContextProvider>
);
