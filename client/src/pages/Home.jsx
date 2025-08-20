import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/pic.svg"; // Make sure this path is correct

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)
// White: #FFFFFF

function Home() {
  return (
    // FIXED: Changed background to subtle cool gray for consistency
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-20 py-12 pt-24 sm:pt-28 gap-12">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#151f35]">
          Discover your <span className="text-[#FF9A00]">next</span> favorite
          book with BookVerse.
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
          Dive into a world of stories, learning, and imagination.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <Link
            to="/signup"
            className="bg-[#FF9A00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border-2 border-[#1D2D50] text-[#1D2D50] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={hero}
          alt="An illustration of a person reading"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Home;
