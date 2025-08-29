import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <p className="mt-4 text-lg text-gray-700">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-black text-white rounded-md transition hover:bg-gray-800"
      >
        Go Home
      </Link>
    </div>
  );
}
