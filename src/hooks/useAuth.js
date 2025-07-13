import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import axiosClient from "../utils/axios-client";

export const useAuth = () => {
  const { user, token, setUser, setToken } = useAuthContext();

  const checkAuth = async () => {
    if (!token) return false;

    try {
      const response = await axiosClient.get("/auth/me");
      const { user: userData } = response.data;

      if (userData) {
        setUser(userData);
        return true;
      }
    } catch (error) {
      console.error("Token inválido:", error);
      setToken(null);
      setUser(null);
    }

    return false;
  };

  useEffect(() => {
    if (token && !user) {
      checkAuth();
    }
  }, [token, user]);

  return {
    user,
    token,
    isAuthenticated: !!token && !!user,
    checkAuth,
  };
};
