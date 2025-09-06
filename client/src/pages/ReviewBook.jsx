import React, { useState } from "react";
import { toast } from "sonner";
import { Star } from "lucide-react";

function ReviewBook() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Review submitted successfully!");
    // API call to save the review can be added here
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={24}
        className={`cursor-pointer transition-transform ${
          star <= (hoverRating || rating) ? "text-yellow-400 scale-110" : "text-gray-300"
        }`}
        onMouseEnter={() => setHoverRating(star)}
        onMouseLeave={() => setHoverRating(0)}
        onClick={() => setRating(star)}
      />
    ));
  };

  return (
    <div className="min-h-screen pb-12 bg-gray-50 pt-20 px-4 lg:px-20 flex justify-center">
      {/* pt-[88px] ensures spacing below fixed navbar (adjust according to your navbar height) */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-white rounded-md shadow-md p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Column: Book Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Add a Review</h2>
          <p className="text-gray-600 text-sm">Share your thoughts about the book</p>

          <div className="space-y-2">
            <label htmlFor="title" className="block font-medium text-gray-800">Book Title</label>
            <input
              id="title"
              type="text"
              placeholder="The Great Gatsby"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="author_name" className="block font-medium text-gray-800">Author</label>
            <input
              id="author_name"
              type="text"
              placeholder="F. Scott Fitzgerald"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category_name" className="block font-medium text-gray-800">Category</label>
            <select
              id="category_name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            >
              <option value="" disabled>Select a category</option>
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Non-fiction</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="isbn" className="block font-medium text-gray-800">ISBN</label>
            <input
              id="isbn"
              type="text"
              placeholder="9780743273565"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>
        </div>

        {/* Right Column: Review */}
        <div className="space-y-6">
          <div>
            <label className="block font-medium text-gray-800 mb-1">Your Rating</label>
            <div className="flex gap-1">{renderStars()}</div>
          </div>

          <div className="space-y-2">
            <label htmlFor="comment" className="block font-medium text-gray-800">Your Review</label>
            <textarea
              id="comment"
              rows="8"
              placeholder="Write your thoughts about the book..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition-all flex justify-center items-center gap-2 cursor-pointer"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewBook;
