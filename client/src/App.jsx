import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router";
import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Feedback from "./pages/Feedback";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Login />,
      },

      {
        path: "/feedback",
        element: <Feedback />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
