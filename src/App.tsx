import { Suspense } from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./components/auth/LoginPage";
import { AuthGuard } from "./components/auth/AuthGuard";
import routes from "tempo-routes";

const App = () => {
  const routing = useRoutes(routes);  // Ensure routes are in the correct format

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <AuthGuard>
                <Home />
              </AuthGuard>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && routing} {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

      </>
    </Suspense>
  );
};

export default App;
