import React from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { Edit, LogOut } from "lucide-react";
import { toast } from "sonner";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out!", {
      description: "See you next time!",
      duration: 2000,
      icon: "✅",
      style: {
        backgroundColor: "#fff",
        color: "black",
      },
    });
    navigate("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-800 text-white flex items-center justify-center text-2xl font-semibold">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">{user.name || "User"}</h2>
            <p className="text-gray-500">{user.email || "user@example.com"}</p>
          </div>
          <div className="sm:ml-auto flex gap-2 mt-4 sm:mt-0">
            <button className="flex items-center gap-1 px-3 py-1.5 border rounded hover:bg-gray-100 text-sm">
              <Edit size={16} />
              Edit
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1.5 border rounded text-red-600 hover:bg-red-50 text-sm"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
