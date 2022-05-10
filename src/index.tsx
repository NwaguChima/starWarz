import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles/index.scss";
import App from "./App";
import { GlobalContextProvider } from "./context/globalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
