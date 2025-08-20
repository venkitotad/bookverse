import React from "react";
import { useAuth } from "../context/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Edit, LogOut } from "lucide-react";

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)
// White: #FFFFFF

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Dummy data for user's reviews - replace with actual API call
  const userReviews = [
    { id: 1, title: "The Silent Patient", rating: 5 },
    { id: 2, title: "Sapiens: A Brief History of Humankind", rating: 4 },
    { id: 3, title: "Clean Code", rating: 5 },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    // Main container with padding for the navbar
    <div className="min-h-screen bg-[#F0F4F8] pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-[#1D2D50] flex items-center justify-center text-white text-4xl font-bold">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-[#1D2D50]">{user?.name || "User"}</h1>
            <p className="text-md text-gray-600">{user?.email || "user@example.com"}</p>
          </div>
          <div className="sm:ml-auto flex gap-2 mt-4 sm:mt-0">
            <button className="flex items-center gap-2 bg-[#F0F4F8] text-[#1D2D50] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
              <Edit size={16} />
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* User's Reviews Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#1D2D50] flex items-center gap-2 mb-4">
            <BookOpen size={20} />
            My Reviews
          </h2>
          <ul>
            {userReviews.map((review) => (
              <li key={review.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="text-[#1D2D50] font-medium">{review.title}</span>
                <span className="text-[#FF9A00] font-semibold">Rating: {review.rating}/5</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
