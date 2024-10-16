import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import EcosystemWallet from "@ecosystem/id";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import EcosystemRedirect from "./components/EcosystemRedirect.tsx";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID!;

export const ecosystemWalletInstance = new EcosystemWallet({
  clientId: CLIENT_ID,
  redirectUri: "http://localhost:5174/redirect",
  logoutRedirectUri: "http://localhost:5174/logout",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/redirect",
    element: (
      <EcosystemRedirect ecosystemWalletInstance={ecosystemWalletInstance} />
    ),
  },
  {
    path: "/logout",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
