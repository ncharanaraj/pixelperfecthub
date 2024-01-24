import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ path: location.pathname }} replace />
  );
};

export default RequireAuth;
