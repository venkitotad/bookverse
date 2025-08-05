import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

// 1. Create Context
export const AuthContext = createContext();

// 2. Provider Component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
    
  });

  // 3. Login Function1
  const login = async (inputs) => {
    try {
      const res = await axios.post("/api/auth/signin", inputs);
      setUser(res.data); // Adjust if your API returns differently
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  // 4. Logout Function
  const logout = async () => {
    try {
      await axios.post("/api/auth/signout");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // 5. Store in localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

