import React from "react";
import { Link } from "react-router-dom";

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)

function Footer() {
  return (
    // Changed: Background to subtle cool gray for consistency
    <footer className="w-full bg-[#F0F4F8] py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200/70">
      <div className="max-w-7xl mx-auto text-center">
        {/* Changed: Text color to deep indigo and accent orange */}
        <p className="text-sm text-[#1D2D50]">
          © 2025{" "}
          <Link to="/" className="font-bold text-[#FF9A00] hover:underline">
            BookVerse
          </Link>
          . All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-x-6 text-sm text-gray-600">
            <Link to="/about" className="hover:text-[#FF9A00] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[#FF9A00] transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-[#FF9A00] transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
