import React from "react";
import reading from '../assets/studying.svg'

function About() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src={reading}
            alt="BookVerse Illustration"
            className="w-80 md:w-full"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-orange-500">BookVerse</span>
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
