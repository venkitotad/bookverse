import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";
import { Eye, EyeOff, User, Lock } from "lucide-react";

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(inputs);
      navigate("/");
      toast.success("Logged In!", { duration: 1000 });
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-8 w-full max-w-sm">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <User size={20} />
          <h2 className="text-lg font-semibold">Welcome Back</h2>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          Sign in to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <Lock size={16} className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="w-full outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Sign In button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-black text-white font-medium py-2 rounded-lg hover:bg-gray-900 transition cursor-pointer disabled:bg-gray-400"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Google button */}
        <button
          type="button"
          className="mt-3 w-full border border-gray-300 bg-white text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Footer */}
        <div className="text-center mt-3">
          <Link to="/signup" className="text-sm text-black underline">
            Or Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
