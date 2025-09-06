import React from "react";
import { BookOpen, Users, Star } from "lucide-react";

function About() {
  const sections = [
    {
      title: "Discover Books",
      text: "Find books tailored to your interests, from classics to new releases. Explore genres and authors with ease.",
      icon: <BookOpen size={36} className="text-indigo-600" />,
      bg: "bg-indigo-50",
      reverse: false,
    },
    {
      title: "Connect with Readers",
      text: "Join a community of book lovers, share reviews, discuss stories, and make new friends who love reading as much as you do.",
      icon: <Users size={36} className="text-green-500" />,
      bg: "bg-green-50",
      reverse: true,
    },
    {
      title: "Personalized Experience",
      text: "Get recommendations and track your reading journey effortlessly. Your bookshelf, your way.",
      icon: <Star size={36} className="text-yellow-500" />,
      bg: "bg-yellow-50",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 pt-28">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          About <span className="text-indigo-600">BookVerse</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          More than a platform — a community for readers, explorers, and storytellers.
        </p>
      </div>

      {/* Sections */}
      <div className="mt-16 space-y-16 max-w-5xl mx-auto">
        {sections.map((sec, i) => (
          <div
            key={i}
            className={`${sec.bg} rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 ${
              sec.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-shrink-0">{sec.icon}</div>
            <div className="max-w-md text-center md:text-left space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">{sec.title}</h2>
              <p className="text-gray-700">{sec.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center space-y-4">
        <p className="text-gray-700 text-lg md:text-xl">
          Dive into a universe of books. Share your thoughts. Discover something new.
        </p>
        <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Explore BookVerse
        </button>
      </div>
    </div>
  );
}

export default About;
