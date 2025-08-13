import React from "react";
import { Link } from "react-router-dom";

function BookList() {
  const books = [
    {
      book_id: 1,
      title: "The Great Gatsby",
      author_name: "F. Scott Fitzgerald",
      cover_url: "https://images-na.ssl-images-amazon.com/images/I/81xXAy6tgfL.jpg",
      average_rating: 4.5,
      total_reviews: 1250,
      isbn: "9780743273565",
    },
    {
      book_id: 2,
      title: "1984",
      author_name: "George Orwell",
      cover_url: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0AfL.jpg",
      average_rating: 4.7,
      total_reviews: 2100,
      isbn: "9780451524935",
    },
    {
      book_id: 3,
      title: "To Kill a Mockingbird",
      author_name: "Harper Lee",
      cover_url: "https://images-na.ssl-images-amazon.com/images/I/81Otwki3IxL.jpg",
      average_rating: 4.8,
      total_reviews: 1840,
      isbn: "9780061120084",
    },
    {
      book_id: 4,
      title: "Pride and Prejudice",
      author_name: "Jane Austen",
      cover_url: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
      average_rating: 4.6,
      total_reviews: 980,
      isbn: "9781503290563",
    },
  ];

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
                  ⭐ {Number(book.average_rating || 0).toFixed(1)} (
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
