import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-purple-700 font-bold text-2xl">BookVerse</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-700 text-lg font-medium">
            <Link to="/" className="hover:text-purple-700">Home</Link>
            <Link to="/about" className="hover:text-purple-700">About</Link>
            <Link to="/contact" className="hover:text-purple-700">Contact</Link>
            <Link to="/signin" className="hover:text-purple-700">Sign In</Link>
            <Link to="/signup" className="hover:text-purple-700">Sign Up</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 text-gray-700 text-lg font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
