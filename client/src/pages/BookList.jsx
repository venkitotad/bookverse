import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await axios.get("/api/books/");
      setBooks(res.data.data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-4 py-8 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl mt-12 font-bold mb-8 text-center text-gray-900">
          📚 All Books
        </h1>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg mb-4">
              Failed to load books. Please try again.
            </p>
            <button
              onClick={fetchBooks}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* No books */}
        {!loading && !error && books.length === 0 && (
          <p className="text-center text-gray-600 py-20">No books available yet.</p>
        )}

        {/* Books grid */}
        {!loading && !error && books.length > 0 && (
          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book.book_id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col border border-gray-200 group"
              >
                {/* Cover */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <img
                    src={
                      book.cover_url ||
                      `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
                    }
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2
                    className="text-base font-semibold text-gray-900 truncate"
                    title={book.title}
                  >
                    {book.title}
                  </h2>
                  <p
                    className="text-sm text-gray-600 truncate"
                    title={book.author_name}
                  >
                    {book.author_name}
                  </p>
                  <p className="text-xs font-medium text-gray-700 mt-1">
                    ⭐ {Number(book.avg_rating || 0).toFixed(1)} (
                    {book.total_reviews || 0} reviews)
                  </p>

                  <Link
                    to={`/books/${book.book_id}`}
                    className="mt-4 w-full  text-indigo-500 text-sm font-medium px-4 py-2 rounded text-center  border-1 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;
