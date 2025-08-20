import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router";
import "./App.css";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Feedback from "./pages/Feedback";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BookList from "./pages/BookList";
import PageNotFound from "./pages/PageNotFound";
import { useAuth } from "./context/useAuth";
import ReviewBook from "./pages/ReviewBook";

const Layout = () => {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const HomeWithBooks = () => {
  const { user } = useAuth();
  return <>{user ? <BookList /> : <Home />}</>;
};

const ProtectedReviewBook = () =>{
  const {user} = useAuth();
  return <>{user ? <ReviewBook/> : <SignIn/>}</>
}

const ProtectedBook = () => {
  const { user } = useAuth();
  return <>{user ? <BookList /> : <Home />}</>;
};

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeWithBooks />,
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
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },

      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/books",
        element: <ProtectedBook/>,
      },
      
      {
        path: "/review",
        element: <ProtectedReviewBook/>,
      },
      
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
