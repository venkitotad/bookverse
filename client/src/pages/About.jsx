import React from "react";
import reading from '../assets/studying.svg'; // Make sure this path is correct

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)
// White: #FFFFFF

function About() {
  return (
    // FIXED: Changed background to subtle cool gray and added padding for navbar
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-6 py-16 pt-24 sm:pt-28">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src={reading}
            alt="An illustration of a person reading a book"
            className="w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D2D50] leading-tight">
            Welcome to <span className="text-[#FF9A00]">BookVerse</span>
          </h1>
          <p className="text-gray-600 text-lg">
            BookVerse is more than just a reading platform — it's a space where book lovers
            gather, discover, and connect. Whether you're a casual reader or an avid explorer of stories,
            we've built this place for you.
          </p>
          <p className="text-gray-600 text-lg">
            Our goal is simple: make reading enjoyable and accessible for everyone. From
            personalized recommendations to a vibrant community, we’re here to make your
            reading journey better.
          </p>
          <p className="text-gray-600 text-lg">
            Dive into a universe of books. Share your thoughts. Discover something new. 
            This is BookVerse — your reading companion.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
