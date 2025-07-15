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
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("CURRENT_USER");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Erro ao recuperar usuário do localStorage:", error);
      return null;
    }
  });
  const [token, _setToken] = useState(() => {
    try {
      return localStorage.getItem("ACCESS_TOKEN");
    } catch (error) {
      console.error("Erro ao recuperar token do localStorage:", error);
      return null;
    }
  });

  const setToken = (token) => {
    _setToken(token);
    if (!token) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("CURRENT_USER");
      setUser(null);
      return;
    }
    try {
      localStorage.setItem("ACCESS_TOKEN", token);
    } catch (error) {
      console.error("Erro ao salvar token no localStorage:", error);
    }
  };

  const setUserData = (userData) => {
    setUser(userData);
    if (userData) {
      try {
        localStorage.setItem("CURRENT_USER", JSON.stringify(userData));
      } catch (error) {
        console.error("Erro ao salvar usuário no localStorage:", error);
      }
    }
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
        setUser: setUserData,
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
