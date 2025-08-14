import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
function BookList() {
  const [books, setBooks] = useState([]);
  
  const fetchBooks = async() =>{
    const res = await axios.get("/api/books/");
    setBooks(res.data.data);    
  }
  
  useEffect(() =>{
      fetchBooks();
  },[])


  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 All Books</h1>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <div
              key={book.book_id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={
                  book.cover_url ||
                  `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
                }
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 flex flex-col flex-grow">
                <h2 className="text-sm font-bold truncate">{book.title}</h2>
                <p className="text-xs text-gray-600">{book.author_name}</p>
                <p className="text-yellow-500 text-xs mt-1">
                  ⭐ {Number(book.avg_rating || 0).toFixed(1)} (
                  {book.total_reviews || 0} reviews)
                </p>
                <Link
                  to={`/books/${book.book_id}`}
                  className="mt-auto bg-orange-500 text-white text-xs px-3 py-2 rounded-lg text-center hover:bg-orange-600 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
