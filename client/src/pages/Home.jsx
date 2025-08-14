import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/pic.svg";

function Home() {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-8 sm:py-12 gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Discover your <span className="text-orange-500">next</span> favorite
          book with <span className="text-stone-700">BookVerse</span>.
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
          Dive into a world of stories, learning, and imagination.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-start gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
          <Link
            to="/signup"
            className="bg-stone-700 text-white px-6 py-3 rounded-xl hover:bg-stone-800 transition w-full sm:w-auto text-center"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border-2 border-stone-700 text-stone-700 px-6 py-3 rounded-xl hover:bg-stone-100 transition w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={hero}
          alt="Books stacked on a table"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl"
        />
      </div>
    </div>
  );
}

export default Home;
