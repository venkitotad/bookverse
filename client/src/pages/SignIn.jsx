import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";


function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
      toast.success("Logged In!", { duration: 1000 });
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  return (
    // FIXED: Added top padding (pt-24) to push the form down below the fixed navbar
    <div className="min-h-screen flex items-center justify-center bg-[#F0F4F8] pt-24 sm:pt-28 py-12 px-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl px-6 py-8">
        <h2 className="text-2xl font-bold text-center text-[#1D2D50] mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Sign in to continue your journey.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-gray-400 text-sm text-[#1D2D50]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-[#1D2D50]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            // TWEAK: Added hover transform for a subtle "lift" effect
            className="w-full py-2.5 bg-[#FF9A00] text-white font-semibold rounded-md hover:bg-orange-500 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-400 text-xs">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign In Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center py-2.5 border border-gray-300 bg-white hover:bg-gray-50 rounded-md text-sm text-[#1D2D50] font-medium transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57c2.08-1.92,3.28-4.74,3.28-8.09Z"
            />
            <path
              fill="#34A853"
              d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z"
            />
            <path
              fill="#FBBC05"
              d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l3.66-2.84Z"
            />
            <path
              fill="#EA4335"
              d="M12,5.16c1.55,0,2.95.54,4.08,1.58l3.17-3.17C17.45,1.99,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z"
            />
          </svg>
          Sign in with Google
        </button>

        {/* TWEAK: Increased top margin for better spacing */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FF9A00] hover:underline font-semibold cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
