import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0">
        {/* Brand + Copyright */}
        <p className="text-sm text-[#1D2D50] text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="font-semibold text-[#1D2D50] hover:text-[#16213E] transition-colors"
          >
            BookVerse
          </Link>
          . All rights reserved.
        </p>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-600">
          <Link to="/about" className="hover:text-[#1D2D50] transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#1D2D50] transition-colors">
            Contact
          </Link>
          <Link to="/feedback" className="hover:text-[#1D2D50] transition-colors">
            Feedback
          </Link>
          <Link to="/privacy" className="hover:text-[#1D2D50] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
