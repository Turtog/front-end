import React from "react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useAuthContext();

  if (!token) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
