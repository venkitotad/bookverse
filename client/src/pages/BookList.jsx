import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)
// White: #FFFFFF

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("/api/books/");
      setBooks(res.data.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
      // Optionally, set an error state here to show in the UI
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    // Changed: Background to subtle cool gray
    <div className="min-h-screen bg-[#F0F4F8] px-4 py-8 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Changed: Heading text to deep indigo */}
        <h1 className="text-3xl font-bold mb-8 text-center text-[#1D2D50]">📚 All Books</h1>

        {books.length === 0 ? (
          <p className="text-center text-gray-600">No books available yet.</p>
        ) : (
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
                  {/* Changed: Book title to deep indigo */}
                  <h2 className="text-base font-bold text-[#1D2D50] truncate" title={book.title}>{book.title}</h2>
                  <p className="text-sm text-gray-600 truncate">{book.author_name}</p>
                  {/* Changed: Rating color to accent orange */}
                  <p className="text-[#FF9A00] text-xs font-semibold mt-1">
                    ⭐ {Number(book.avg_rating || 0).toFixed(1)} (
                    {book.total_reviews || 0} reviews)
                  </p>
                  <Link
                    to={`/books/${book.book_id}`}
                    // Changed: Button to accent orange
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
