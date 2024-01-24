import "./index.css";
import App from "./App";
import React from "react";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, SearchResults, Login } from "./pages";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import History from "./components/History";
import UserAccount from "./components/UserAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/searchResults",
        element: <SearchResults />,
      },
      {
        path: "/createAccount",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <RequireAuth>
            <UserAccount />
          </RequireAuth>
        ),
        children: [
          {
            path: "",
            element: <Profile />,
          },
          {
            path: "history",
            element: <History />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
