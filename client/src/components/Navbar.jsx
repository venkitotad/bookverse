import { Link } from "react-router-dom";
import img from "../assets/logo2.png";
import { useState } from "react";
import React from "react";
import { useAuth } from "../context/useAuth";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={img} alt="BookVerse Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/contact">Contact</Link> */}
          <Link to="/feedback">Feedback</Link>
          <Link to="/feedback">Chat</Link>
          
        </nav>

        {/* Search bar (desktop only) */}

        {user ? (
          <div className="hidden md:flex items-center space-x-2 ml-4">
            <input
              type="text"
              placeholder="Search books..."
              className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 transition text-sm w-48"
            />
            <button className="px-3 py-1.5 bg-orange-500 text-white rounded-md text-sm hover:bg-stone-800 transition cursor-pointer">
              Search
            </button>
          </div>
        ) : null}

        {/* Auth buttons */}

        <div className="hidden md:flex gap-2">
          {user ? (
            <Link
              to="/signup"
              className="px-4 py-1.5  rounded-md border border-gray-300 hover:bg-gray-100 text-sm font-medium text-gray-700"
              onClick={logout}
            >
              logout
            </Link>
          ) : (
            <Link
              to="/signin"
              className="px-4 py-1.5  rounded-md hover:bg-gray-200 text-sm font-medium text-gray-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 text-gray-600 hover:text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow">
          <Link to="/" className="block text-gray-700">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700">
            About
          </Link>
          <Link to="/contact" className="block text-gray-700">
            Contact
          </Link>
          <Link to="/feedback" className="block text-gray-700">
            Feedback
          </Link>

          {/* Mobile Search */}
          <div className="mt-2 flex space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm"
            />
            <button className="px-3 py-1.5 bg-stone-700 text-white rounded-md text-sm">
              Go
            </button>
          </div>

          {/* Auth */}
          <div className="flex gap-2 mt-2">
            {user ? (
              <Link
                to="/signup"
                className="px-4 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
                onClick={logout}
              >
                logout
              </Link>
            ) : (
              <Link
                to="/signin"
                className="px-4 py-1.5 text-sm rounded-md text-black hover:bg-gray-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
