import { Link } from "react-router-dom";
import img from "../assets/logo2.png";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={img} alt="BookVerse Logo" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-gray-800">BookVerse</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/review">Review Book</Link>
        </nav>

        {/* Search & Sort (Desktop only) */}
        {user && (
          <div className="hidden md:flex items-center gap-3 ml-4">
            {/* <select className="border px-3 py-1.5 rounded-md text-sm bg-white shadow-sm">
              <option value="title-asc">Title (A–Z)</option>
              <option value="title-desc">Title (Z–A)</option>
              <option value="date-new">Newest First</option>
              <option value="date-old">Oldest First</option>
              <option value="rating-high">Rating (High → Low)</option>
              <option value="rating-low">Rating (Low → High)</option>
            </select>
             */}
            {/* search bar  */}
            <input
              type="text"
              placeholder="Search books..."
              className="px-4 py-1.5 border border-gray-200 rounded-full text-sm w-48 focus:ring-2 focus:ring-orange-400 shadow-sm outline-0"
            />
            <button className="px-3 py-1.5 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 cursor-pointer">
              Search
            </button>
          </div>
        )}

        {/* Auth buttons */}
       <div className="hidden md:flex relative">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:ring-2 hover:ring-orange-400 cursor-pointer" 
              >
                {/* Initial (fallback if no avatar) */}
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="px-4 py-1.5 rounded-md hover:bg-gray-200 text-sm font-medium text-gray-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-700" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/feedback" className="block text-gray-700" onClick={() => setIsOpen(false)}>Feedback</Link>
            <Link to="/chat" className="block text-gray-700" onClick={() => setIsOpen(false)}>Chat</Link>

            {user && (
              <>
                {/* <select className="w-full border px-3 py-1.5 rounded-md text-sm">
                  <option value="title-asc">Title (A–Z)</option>
                  <option value="title-desc">Title (Z–A)</option>
                  <option value="date-new">Newest First</option>
                  <option value="date-old">Oldest First</option>
                  <option value="rating-high">Rating (High → Low)</option>
                  <option value="rating-low">Rating (Low → High)</option>
                </select> */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-3 py-1.5 border rounded-md text-sm"
                  />
                  <button className="px-3 py-1.5 bg-orange-500 text-white rounded-md text-sm">
                    Go
                  </button>
                </div>
              </>
            )}

            {/* Auth (mobile) */}
            {user ? (
              <button
                onClick={logout}
                className="w-full px-4 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                className="w-full block text-center px-4 py-1.5 text-sm rounded-md hover:bg-gray-200"
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
