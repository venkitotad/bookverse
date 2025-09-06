import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import {toast} from "sonner";
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
     toast.success("Logged In", {
         description: "browse books now!",
         duration: 3000,
         icon: "✅",
         style: {
           backgroundColor: "#fff",
           color: "black",
         },
       });
    navigate("/");
  } catch (err) {
    const msg = err.response?.data?.message;
    if (err.response?.status === 401) {
      toast.error("Invalid Credentials", {
        description: "Email or password is incorrect.",
      });
    } else {
      toast.error("Login Failed", {
        description: msg || "Something went wrong. Please try again.",
      });
    }
    console.error(err);
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
          <h2 className="text-lg font-semibold">...</h2>
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
            className="mt-6 w-full bg-indigo-700 text-white font-medium py-2 rounded-lg hover:bg-indigo-900 transition cursor-pointer disabled:bg-gray-400"
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
