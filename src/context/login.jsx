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

  useEffect(() => {
    // Fetch user data if a token is available on component mount
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []); // Runs only on component mount

  const fetchUserData = async (token) => {
    try {
      console.log("Using token for fetch:", token);
      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Response:", response.data);
      if (response.data) {
        setUserData(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
      } else {
        throw new Error("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const login = async (token) => {
    localStorage.setItem("token", token);
    console.log("About to fetch user data with token:", token);
    fetchUserData(token); // Fetch user data with the new token
    setAuthToken(token); // Update state to reflect login
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setAuthToken(null);
    setUserData(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ authToken, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
