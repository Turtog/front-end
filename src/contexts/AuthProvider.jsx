/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import axiosClient from "../utils/axios-client";

const AuthContext = createContext({
  user: {},
  token: null,
  setUser: () => {},
  setToken: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("CURRENT_USER"))
  );
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    _setToken(token);
    if (!token) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("CURRENT_USER");
      setUser(null);
      return;
    }
    localStorage.setItem("ACCESS_TOKEN", token);
  };

  const logout = async () => {
    try {
      // Chama a API de logout se houver token
      if (token) {
        await axiosClient.post("/auth/logout");
      }
    } catch (error) {
      console.error("Erro ao fazer logout na API:", error);
    } finally {
      // Remove dados locais independente do resultado da API
      setToken(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
