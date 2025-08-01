import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Welcome to BookVerse 📚
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Discover, read, and share your favorite books with the world. A
          digital library at your fingertips.
        </p>

        <div className="space-x-4">
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl text-white bg-purple-700 hover:bg-purple-800 transition-all"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl text-purple-700 border border-purple-700 hover:bg-purple-50 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
