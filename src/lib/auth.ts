import { AppState } from "@auth0/auth0-react";


export const AUTH0_CONFIG = {
  domain: "http://dev-0ktuozmerrxh1e88.us.auth0.com",
  clientId: "EWStDyW2HHdIIRg2EXxUGV4tfu2PmsUY", // Replace with your actual Client ID
  authorizationParams: {
    redirect_uri: `http://localhost:3000/login/callback`, // Update if callback URL changes
  },
};

export const onRedirectCallback = (appState?: any) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};
