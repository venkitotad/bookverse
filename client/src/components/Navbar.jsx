import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/useAuth";

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let dropdownRef = useClickOutside(() => setDropdownOpen(false));

  return (
 <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
    {/* Logo */}
    <Link to="/" className="flex items-center gap-2 z-50">
      <span className="text-xl font-bold text-[#1D2D50]">BookVerse</span>
    </Link>

    {/* Desktop nav */}
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1D2D50]">
      <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
      <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
      <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
      <Link to="/review" className="hover:text-gray-600 transition-colors">Review Book</Link>
    </nav>

    {/* Search bar + auth */}
    {user && (
      <div className="hidden md:flex items-center gap-2 ml-4">
        <input
          type="text"
          placeholder="Search books..."
          className="px-4 py-2 border border-gray-300 rounded-full text-sm w-48 focus:ring-2 focus:ring-[#1D2D50]/30 focus:border-[#1D2D50]/50 shadow-sm outline-none transition-all"
        />
        <button className="px-5 py-2 bg-[#1D2D50] text-white rounded-full text-sm font-semibold hover:bg-[#16213e] transition-colors">
          Search
        </button>
      </div>
    )}

    {/* Auth buttons / profile */}
    <div className="hidden md:flex relative items-center">
      {user ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1D2D50] font-bold hover:ring-2 hover:ring-[#1D2D50]/30 transition-all z-50"
          >
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-1 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-[#1D2D50] hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => { logout(); setDropdownOpen(false); }}
                className="w-full text-left px-4 py-2 text-sm text-[#1D2D50] hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/signin"
          className="border border-[#1D2D50] text-[#1D2D50] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          Sign In
        </Link>
      )}
    </div>

    {/* Mobile menu button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded-md hover:bg-gray-100 z-50"
    >
      <svg
        className="w-6 h-6 text-[#1D2D50]"
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

  {/* Mobile menu */}
  {isOpen && (
    <div className="md:hidden bg-white shadow-lg border-t border-gray-200 z-40">
      <div className="px-4 py-4 space-y-3">
        <Link to="/" className="block text-[#1D2D50] font-medium" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="block text-[#1D2D50] font-medium" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" className="block text-[#1D2D50] font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/review" className="block text-[#1D2D50] font-medium" onClick={() => setIsOpen(false)}>Review Book</Link>

        <hr className="my-2" />

        {user ? (
          <button
            onClick={() => { logout(); setIsOpen(false); }}
            className="w-full text-left px-4 py-2 text-sm text-[#1D2D50] font-semibold rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/signin"
            className="w-full block text-center px-4 py-2 text-sm bg-[#1D2D50] text-white font-semibold rounded-md hover:bg-[#16213e]"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  )}
</header>

  );
}

export default Navbar;
