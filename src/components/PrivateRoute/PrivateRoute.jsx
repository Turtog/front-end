import React from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, token } = useAuthContext();
  const isLoggedIn = !!token && !!user;

  if (!isLoggedIn) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
