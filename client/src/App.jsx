import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import DashboardLayout from "./components/DashboardLayout";
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
