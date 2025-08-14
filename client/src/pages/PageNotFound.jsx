import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="mt-4 text-lg text-gray-700">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
