import React from "react";

function ReviewBook() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Wait... under development!");
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center px-4 py-12 pt-24 sm:pt-28">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-md p-10 space-y-8"
      >
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-[#1D2D50]">
            Add New Review
          </h2>
          <p className="text-gray-500 text-sm">
            Share your thoughts about the book with others
          </p>
        </div>

        {/* Book Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Book Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-[#1D2D50] mb-1.5"
            >
              Book Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g., The Great Gatsby"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-[#1D2D50] focus:border-[#1D2D50] 
                placeholder:text-gray-400 text-sm text-[#1D2D50] transition"
            />
          </div>

          {/* Author */}
          <div>
            <label
              htmlFor="author_name"
              className="block text-sm font-semibold text-[#1D2D50] mb-1.5"
            >
              Author
            </label>
            <input
              id="author_name"
              type="text"
              placeholder="e.g., F. Scott Fitzgerald"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-[#1D2D50] focus:border-[#1D2D50] 
                placeholder:text-gray-400 text-sm text-[#1D2D50] transition"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category_name"
              className="block text-sm font-semibold text-[#1D2D50] mb-1.5"
            >
              Category
            </label>
            <select
              id="category_name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-[#1D2D50] focus:border-[#1D2D50] 
                text-sm text-[#1D2D50] bg-white transition"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="1" disabled>
                1
              </option>
              <option value="2" disabled>
                2
              </option>
            </select>
          </div>

          {/* ISBN */}
          <div>
            <label
              htmlFor="isbn"
              className="block text-sm font-semibold text-[#1D2D50] mb-1.5"
            >
              ISBN
            </label>
            <input
              id="isbn"
              type="text"
              placeholder="e.g., 9780743273565"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-[#1D2D50] focus:border-[#1D2D50] 
                placeholder:text-gray-400 text-sm text-[#1D2D50] transition"
            />
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-semibold text-[#1D2D50] mb-1.5"
            >
              Your Rating (1-5)
            </label>
            <input
              id="rating"
              type="number"
              placeholder="e.g., 4"
              min="1"
              max="5"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-[#1D2D50] focus:border-[#1D2D50] 
                placeholder:text-gray-400 text-sm text-[#1D2D50] transition"
            />
          </div>

          {/* Review */}
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-semibold text-[#1D2D50] mb-1.5"
            >
              Your Review
            </label>
            <textarea
              id="comment"
              rows="5"
              placeholder="Write your thoughts about the book..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-[#1D2D50] focus:border-[#1D2D50] 
                placeholder:text-gray-400 text-sm text-[#1D2D50] transition"
            ></textarea>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#1D2D50] hover:bg-[#16213E] text-white 
              font-semibold py-3 rounded-lg shadow-sm 
              focus:ring-2 focus:ring-offset-2 focus:ring-[#1D2D50] 
              transition-colors duration-200"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewBook;
