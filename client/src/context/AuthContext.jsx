import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// 1. Create the context
const AuthContext = createContext();

// 2. Helper function to safely get the user from localStorage
const getLocalUser = () => {
  try {
    const storedUser = localStorage.getItem("user");
    // If a user is found in storage, parse it. Otherwise, return null.
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (err) {
    console.error("Failed to parse user from localStorage:", err);
    // If parsing fails, it's safer to clear the corrupted item.
    localStorage.removeItem("user");
    return null;
  }
};

// 3. AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getLocalUser);
  const [loading, setLoading] = useState(false); // Added loading state for feedback

  // --- Login Function ---
  const login = async (inputs) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signin", inputs);
      // FIX: Ensure the entire user object from the response is set
      setUser(res.data.data); 
    } catch (err) {
      console.error("Login error:", err);
      return false; // Indicate failure
    } finally {
      setLoading(false);
    }
  };

  // --- Logout Function ---
  const logout = async () => {
    try {
      await axios.post("/api/auth/signout");
    } catch (err) {
      // Log the error but proceed with frontend logout regardless
      console.error("Server logout failed, proceeding with client-side logout:", err);
    } finally {
      // This part should always run
      setUser(null);
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    }
  };

  // --- Sync user state with localStorage ---
  useEffect(() => {
    try {
      if (user) {
        // CRITICAL FIX: Store the ENTIRE user object, not just the name.
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    } catch (err) {
      console.error("Failed to update localStorage:", err);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
