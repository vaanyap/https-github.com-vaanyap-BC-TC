import { ReactNode, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    loginWithRedirect(); // Redirect to Auth0 login
    return null;
  }
  useEffect(() => {
    console.log('AuthGuard is loading...');
  }, [isLoading, isAuthenticated]);

  return <>{children}</>;
};
