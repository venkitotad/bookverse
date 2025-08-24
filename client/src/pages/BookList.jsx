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
      setTimeout(() => {
        setBooks(res.data.data);
        setLoading(false)
      }, 3000);
      

    } catch (err) {
      console.error("Failed to fetch books:", err);
      setError(true);
      setLoading(false);
    } 
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F4F8] px-4 py-8 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl mt-11 font-bold mb-8 text-center text-[#1D2D50]">
          📚 All Books
        </h1>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-[#ff1818] text-lg font-medium">
            Loading...
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="text-center text-red-500 text-sm">
            Failed to load books. Please try again later.
          </p>
        )}

        {/* NO BOOKS */}
        {!loading && !error && books.length === 0 && (
          <p className="text-center text-gray-600">No books available yet.</p>
        )}

        {/* BOOKS GRID */}
        {!loading && !error && books.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {books.map((book) => (
              <div
                key={book.book_id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative w-full h-56 sm:h-64">
                  <img
                    src={
                      book.cover_url ||
                      `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
                    }
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2
                    className="text-base font-bold text-[#1D2D50] truncate"
                    title={book.title}
                  >
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-600 truncate">
                    {book.author_name}
                  </p>
                  <p className="text-[#FF9A00] text-xs font-semibold mt-1">
                    ⭐ {Number(book.avg_rating || 0).toFixed(1)} (
                    {book.total_reviews || 0} reviews)
                  </p>
                  <Link
                    to={`/books/${book.book_id}`}
                    className="mt-4 w-full bg-[#FF9A00] text-white text-sm font-semibold px-4 py-2 rounded-md text-center hover:bg-orange-500 transition-colors"
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
