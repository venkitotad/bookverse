import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-6 py-16 pt-28 text-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#111] leading-tight">
          About <span className="text-[#111]">BookVerse</span>
        </h1>

        {/* Paragraphs */}
        <p className="text-gray-600 text-lg">
          BookVerse is more than just a reading platform — it’s a space where book lovers
          gather, discover, and connect. Whether you’re a casual reader or an avid explorer of stories,
          we’ve built this place for you.
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
