import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : null;
  });

  const login = async (data) => {
    localStorage.setItem("token", data.token);
    setAuthToken(data.token);
    console.log("About to fetch user data with token:", data.token);
    setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setAuthToken(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
