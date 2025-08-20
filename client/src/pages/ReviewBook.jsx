import React from 'react'

function ReviewBook() {
  return (
    <form className="max-w-3xl w-full mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Add New Review
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            id="name"
            type="text"
            placeholder="Enter the book title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            id="category"
            type="text"
            placeholder="Book category"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
            Author
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            id="author"
            type="text"
            placeholder="Author name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            id="isbn"
            type="number"
            placeholder="Enter ISBN"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            id="rating"
            type="number"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
            Review
          </label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            id="review"
            rows="5"
            placeholder="Write your feedback"
          ></textarea>
        </div>
      </div>

      <div className="text-center">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-200 cursor-pointer"
          type="submit"
        >
          Submit Review
        </button>
      </div>
    </form>
  )
}

export default ReviewBook
