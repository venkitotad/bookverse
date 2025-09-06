import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";


function Navbar() {
  
  const useClickOutside = (handler) => {
  const domNode = React.useRef();

  React.useEffect(() => {
    const maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => document.removeEventListener("mousedown", maybeHandler);
  }, [handler]);

  return domNode;
};
  
  
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setDropdownOpen(false));
  

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Review Book", to: "/review" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#1D2D50]">BookVerse</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1D2D50]">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-gray-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search bar (optional for logged-in users) */}
        {user && (
          <div className="hidden md:flex items-center gap-2 ml-6">
            <input
              type="text"
              placeholder="Search books..."
              className="px-4 py-2 border border-indigo-300 rounded-full text-sm w-48 focus:outline-none"
            />
            <button className="px-5 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-800 cursor-pointer">
              Search
            </button>
          </div>
        )}

        {/* Auth / Profile Dropdown */}
        <div className="hidden md:flex items-center ml-4 relative">
          {user ? (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full border-2 flex items-center bg-red-500 justify-center text-white cursor-pointer font-bold hover:ring-2 "
              >
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md py-1">
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-[#1D2D50] hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-[#1D2D50] hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => { logout(); setDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="border border-[#1D2D50] text-[#1D2D50] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
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
              d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileOpen(false)}
                className="block text-[#1D2D50] font-medium py-2"
              >
                {link.name}
              </Link>
            ))}

            <hr className="my-2" />

            {user ? (
              <button
                onClick={() => { logout(); setIsMobileOpen(false); }}
                className="w-full text-left px-4 py-2 text-sm text-[#1D2D50] font-semibold border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signin"
                onClick={() => setIsMobileOpen(false)}
                className="w-full block text-center px-4 py-2 text-sm bg-[#1D2D50] text-white font-semibold rounded-md hover:bg-[#16213e]"
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
