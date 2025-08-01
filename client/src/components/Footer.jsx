import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-purple-700">BookVerse</span>. All rights reserved.
        </div>

        {/* Links */}
      </div>
    </footer>
  );
}

export default Footer;
