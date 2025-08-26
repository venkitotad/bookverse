import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Lock, Mail } from "lucide-react";

function SignUp() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsValid(value.length >= 8);
  };

  return (
    <div className="min-h-screen mt-3.5 bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 w-full max-w-sm">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <User size={20} />
          <h2 className="text-lg font-semibold">Create new account</h2>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          Start now
        </p>

        {/* Username */}
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <User size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Mail size={16} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-2">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>
        {!isValid && password && (
          <p className="text-red-500 text-xs flex items-center mt-1">
            ● Password must be 8+ characters
          </p>
        )}

        {/* Register button */}
        <button className="mt-6 w-full bg-black text-white font-medium py-2 rounded-lg hover:bg-gray-900 transition cursor-pointer">
          Sign Up
        </button>

        {/* Google button */}
        <button className="mt-3 w-full border border-gray-300 bg-white text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        {/* Login link */}
        <div className="text-center mt-3">
          <Link to="/signin" className="text-sm text-black underline">
            Or SigIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
