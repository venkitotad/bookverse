import React from "react";

function ReviewBook() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Wait... under development!");
  };

  return (
    <div className="min-h-screen bg-transparent flex justify-center items-start pt-16 px-4 mt-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded-sm border border-gray-200 shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Column: Book Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#1D2D50]">Add a Review</h2>
          <p className="text-gray-600 text-sm">Share your thoughts about the book</p>

          <div>
            <label htmlFor="title" className="block mb-1 font-semibold text-[#1D2D50]">
              Book Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="The Great Gatsby"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="author_name" className="block mb-1 font-semibold text-[#1D2D50]">
              Author
            </label>
            <input
              id="author_name"
              type="text"
              placeholder="F. Scott Fitzgerald"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="category_name" className="block mb-1 font-semibold text-[#1D2D50]">
              Category
            </label>
            <select
              id="category_name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="1">Fiction</option>
              <option value="2">Non-fiction</option>
            </select>
          </div>

          <div>
            <label htmlFor="isbn" className="block mb-1 font-semibold text-[#1D2D50]">
              ISBN
            </label>
            <input
              id="isbn"
              type="text"
              placeholder="9780743273565"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Column: Review */}
        <div className="space-y-4">
          <div>
            <label htmlFor="rating" className="block mb-1 font-semibold text-[#1D2D50]">
              Your Rating (1-5)
            </label>
            <input
              id="rating"
              type="number"
              min="1"
              max="5"
              placeholder="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block mb-1 font-semibold text-[#1D2D50]">
              Your Review
            </label>
            <textarea
              id="comment"
              rows="8"
              placeholder="Write your thoughts about the book..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-md transition-colors cursor-pointer"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewBook;
