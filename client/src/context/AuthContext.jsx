import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// context
const AuthContext = createContext();

// helper function
const getLocalUser = () => {
  try {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  } catch (err) {
    console.error("Error parsing user from localStorage", err);
    localStorage.removeItem("user");
    return null;
  }
};

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getLocalUser());

  const login = async (inputs) => {
    const res = await axios.post("/api/auth/signin", inputs);
    setUser(res.data.data);
  };

  const logout = async() => {
    await axios.post("/api/auth/signout")
    setUser(null);
    localStorage.removeItem("user");
  };

  //  update localStorage on user change
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
export { AuthProvider };
