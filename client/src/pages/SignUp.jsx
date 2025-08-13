import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/signup", inputs);
      console.log(res);
      toast.success("Registration successful! please login..");
      navigate("/signin");
    } catch (err) {
      toast.error("soemthing went wrong try again");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen my-6 flex items-center justify-center bg-gradient-to-br from-[#f8f9fc] to-[#f1f2f6] relative overflow-hidden">
      {/* Purple Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blend-hue opacity-30 rounded-full blur-2xl pointer-events-none" />

      {/* Card */}
      <div className="w-full max-w-sm bg-white shadow-md rounded-2xl px-6 py-6 z-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-1">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-4">
          Join us and start your journey!
        </p>

        <form className="space-y-3">
          {/* Name */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.804 4.121 2.063M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 placeholder:text-gray-400 text-sm"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 12H8m0 0l-4-4m4 4l-4 4m12-4h.01M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 placeholder:text-gray-400 text-sm"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 11c.943 0 1.707-.764 1.707-1.707V8.707A1.707 1.707 0 0012 7a1.707 1.707 0 00-1.707 1.707v.586C10.293 10.236 11.057 11 12 11zm-6 4h12a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1a2 2 0 012-2z" />
              </svg>
            </span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 placeholder:text-gray-400 text-sm"
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <Eye size={20} strokeWidth={2} />
              ) : (
                <EyeOff size={20} strokeWidth={2} />
              )}
            </button>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2.5 bg-orange-500 text-white font-medium rounded-md hover:bg-stone-50-600 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-xs">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="google my-2">
          <button
            type="button"
            className="w-full flex items-center justify-center py-2.5 border border-gray-300 bg-white hover:bg-gray-100 rounded-md text-sm"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              {/* Google Icon Paths */}
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
            <span>Sign up with Google</span>
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-orange-600 hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
