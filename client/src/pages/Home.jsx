import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg- flex flex-col items-center justify-center px-6 lg:px-20 py-16 pt-28 text-center">
      {/* Content */}
      <div className="w-full max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#111]">
          Discover your <span className="text-[#111]">next</span> favorite book with{" "}
          <span className="text-[#111]">BookVerse</span>.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Dive into a world of stories, learning, and imagination.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            to="/signup"
            className="bg-[#111] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#333] transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border-2 border-[#111] text-[#111] px-8 py-3 rounded-lg font-semibold hover:bg-[#222] hover:text-white transition-all w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
