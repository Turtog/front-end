/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  user: {},
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(() => {
    const savedUser = localStorage.getItem("CURRENT_USER");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setUser = (user) => {
    _setUser(user);
    if (user) {
      localStorage.setItem("CURRENT_USER", JSON.stringify(user));
    } else {
      localStorage.removeItem("CURRENT_USER");
    }
  };

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

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
