import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center px-6 lg:px-20 py-16 pt-28 text-center">
      
      {/* Hero Content */}
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Discover your <span className="text-indigo-600">next</span> favorite book with{" "}
          <span className="text-indigo-700">BookVerse</span>.
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
          Dive into a world of stories, learning, and imagination. Explore, read, and share your favorite books with our vibrant community.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <BookOpen size={20} /> Get Started
          </Link>
          <Link
            to="/about"
            className="border-2  text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;
