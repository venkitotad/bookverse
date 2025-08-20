import React from 'react';

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)
// White: #FFFFFF

function Feedback() {
  return (
    // Main container with padding for the navbar and consistent background
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-4 py-12 pt-24 sm:pt-28">
      <form className="max-w-lg w-full mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6">
        {/* Themed heading */}
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#1D2D50]">
                Share Your Feedback
            </h2>
            <p className="mt-2 text-sm text-gray-600">
                We value your thoughts on how we can improve BookVerse.
            </p>
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-sm font-semibold leading-6 text-[#1D2D50]" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 block w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold leading-6 text-[#1D2D50]" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 block w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Feedback Textarea */}
        <div>
          <label className="block text-sm font-semibold leading-6 text-[#1D2D50]" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            className="mt-2 block w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
            id="feedback"
            rows="5"
            placeholder="Tell us what you think..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
            <button
                className="w-full bg-[#FF9A00] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500/80 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                type="submit"
            >
                Submit Feedback
            </button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
