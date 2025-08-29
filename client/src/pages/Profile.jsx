import React from 'react';
import { useAuth } from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Edit, LogOut, Star, MessageSquare } from 'lucide-react';

const userStats = {
  reviewsWritten: 12,
  booksAdded: 5,
  averageRating: 4.5,
};

const userReviews = [
  {
    book_id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    rating: 5,
    comment: 'An absolute masterpiece of American literature. The characters are unforgettable and the prose is beautiful.',
  },
  {
    book_id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    rating: 4,
    comment: 'A sci-fi epic that builds an incredible world. A bit dense at times, but worth the read.',
  },
  {
    book_id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    rating: 5,
    comment: 'A powerful and moving story that has stayed with me for years. A must-read for everyone.',
  },
];

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center">
        <p className="text-[#1D2D50]">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F4F8] pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-[#1D2D50] flex items-center justify-center text-white text-4xl font-bold ring-4 ring-white ring-offset-2 ring-offset-[#F0F4F8]">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-[#1D2D50]">{user.name || 'User'}</h1>
            <p className="text-gray-600">{user.email || 'user@example.com'}</p>
          </div>
          <div className="sm:ml-auto flex gap-2 mt-4 sm:mt-0">
            <button className="flex items-center gap-2 bg-gray-100 text-[#1D2D50] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
              <Edit size={16} />
              Edit
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* User Stats Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#1D2D50] mb-4">My Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
              <BookOpen className="text-[#1D2D50]" size={28}/>
              <div>
                <p className="text-2xl font-bold text-[#1D2D50]">{userStats.reviewsWritten}</p>
                <p className="text-sm text-gray-500">Reviews Written</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
              <Star className="text-[#1D2D50]" size={28}/>
              <div>
                <p className="text-2xl font-bold text-[#1D2D50]">{userStats.averageRating}</p>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
              <MessageSquare className="text-[#1D2D50]" size={28}/>
              <div>
                <p className="text-2xl font-bold text-[#1D2D50]">{userStats.booksAdded}</p>
                <p className="text-sm text-gray-500">Books Added</p>
              </div>
            </div>
          </div>
        </div>

        {/* User's Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#1D2D50] mb-4">My Reviews</h2>
          <div className="space-y-4">
            {userReviews.length > 0 ? (
              userReviews.map((review) => (
                <div key={review.book_id} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-[#1D2D50]">{review.title}</h3>
                      <p className="text-sm text-gray-500">by {review.author}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#1D2D50] text-white px-2 py-1 rounded-md text-sm">
                      <Star size={14} />
                      <span>{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{review.comment}"</p>
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <p className="text-gray-600">You haven't written any reviews yet.</p>
                <Link to="/review" className="mt-4 inline-block bg-[#1D2D50] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#16213E] transition-colors">
                  Write a Review
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
