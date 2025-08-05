import React from "react";

function Contact() {
  return (
    <div className="min-h-screen pt-4 my-8 bg-gradient-to-br flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold text-stone-700 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Got questions, feedback, or just want to say hi? Fill out the form below and we'll get back to you!
        </p>
        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
          />
          <button
            type="submit"
            className="w-full bg-stone-700 text-white py-2 rounded-lg cursor-pointer transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
