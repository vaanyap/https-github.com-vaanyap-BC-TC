import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_CONFIG, onRedirectCallback } from "./lib/auth";


import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider {...AUTH0_CONFIG} onRedirectCallback={onRedirectCallback}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
