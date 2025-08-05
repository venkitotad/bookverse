// import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/logo.png'
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="text-purple-700 font-bold text-2xl">BookVerse</div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 text-gray-700 text-lg font-medium">
//             <Link to="/" className="hover:text-purple-700">Home</Link>
//             <Link to="/about" className="hover:text-purple-700">About</Link>
//             <Link to="/contact" className="hover:text-purple-700">Contact</Link>
//             <Link to="/signin" className="hover:text-purple-700">Sign In</Link>
//             {/* <Link to="/signup" className="hover:text-purple-700">Sign Up</Link> */}
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col gap-4 py-4 text-gray-700 text-lg font-medium">
//             <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//             <Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
//             {/* <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link> */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={img}
            alt="BookVerse Logo"
            className="h-12 w-auto"
          />
          <span className="sr-only"></span>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className=" transition-colors">Home</Link>
          <Link to="/about" className=" transition-colors">About</Link>
          <Link to="/contact" className=" transition-colors">Contact</Link>
           <Link to="/feedback" className=" transition-colors">Feedback</Link>
        </nav>

        {/* Auth buttons */}
        <div className="flex gap-2">
          <Link
            to="/signup"
            className="px-4 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="px-4 py-1.5 text-sm rounded-md bg-blend-darken text-black hover:bg-black-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

