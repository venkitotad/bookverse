import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-3xl w-full text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">About BookVerse</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          BookVerse is a platform built for book lovers. Whether you're a reader, writer,
          or simply someone who loves stories — we've created a space for you. Our mission
          is to connect people through books and make knowledge and stories accessible to all.
        </p>
      </div>
    </div>
  );
}

export default About;
