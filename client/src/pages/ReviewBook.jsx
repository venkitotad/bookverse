import React from 'react';

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)
// White: #FFFFFF

function ReviewBook() {
  return (
    // FIXED: Added top padding (pt-24) to push the form down below the fixed navbar
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-4 py-12 pt-24 sm:pt-28">
      <form className="max-w-2xl w-full mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6">
        {/* Changed: Heading to deep indigo */}
        <h2 className="text-3xl font-extrabold text-center text-[#1D2D50]">
          Add New Review
        </h2>

        {/* --- Book Details Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-[#1D2D50] font-medium mb-2" htmlFor="name">
              Book Title
            </label>
            <input
              // Changed: Input styling for consistency
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
              id="name"
              type="text"
              placeholder="e.g., The Great Gatsby"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-[#1D2D50] font-medium mb-2" htmlFor="author">
              Author
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
              id="author"
              type="text"
              placeholder="e.g., F. Scott Fitzgerald"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-[#1D2D50] font-medium mb-2" htmlFor="category">
              Category
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
              id="category"
              type="text"
              placeholder="e.g., Fiction"
            />
          </div>

          {/* ISBN */}
          <div>
            <label className="block text-[#1D2D50] font-medium mb-2" htmlFor="isbn">
              ISBN
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
              id="isbn"
              type="text" // Changed to text to accommodate ISBNs with 'X'
              placeholder="e.g., 9780743273565"
            />
          </div>
        </div>

        {/* --- Review Section --- */}
        <div className="space-y-6 pt-4 border-t">
           {/* Rating */}
          <div>
            <label className="block text-[#1D2D50] font-medium mb-2" htmlFor="rating">
              Your Rating (1-5)
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
              id="rating"
              type="number"
              placeholder="e.g., 4"
              min="1"
              max="5"
            />
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-[#1D2D50] font-medium mb-2" htmlFor="review">
              Your Review
            </label>
            <textarea
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
              id="review"
              rows="5"
              placeholder="Write your thoughts about the book..."
            ></textarea>
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="text-center pt-4">
          <button
            // Changed: Button to accent orange
            className="bg-[#FF9A00] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500/80 transition-colors duration-200 cursor-pointer"
            type="submit"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewBook;
