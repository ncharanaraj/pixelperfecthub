import "./index.css";
import App from "./App";
import React from "react";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import SearchResults from "./pages/SearchResults";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
