import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to BookVerse</h1>
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
  );
}

export default About;
