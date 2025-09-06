import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Mail } from "lucide-react";
import {toast} from "sonner";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      setIsValid(value.length >= 4);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const res = await axios.post("/api/auth/signup", inputs);
  console.log(res);
   toast.success("Registerd!", {
       description: "Registerd successfully please login!",
       duration: 2000,
       icon: "✅",
       style: {
         backgroundColor: "#fff",
         color: "black",
       },
     });
  navigate("/signin");
} catch (err) {
  if (err.response?.status === 409) {
    toast.error("User already exists", {
      description: "Try signing in instead.",
    });
  } else {
    toast.error("Signup Failed", {
      description: err.response?.data?.message || "Please try again later.",
    });
  }
}
  };

  return (
    <div className="min-h-screen mt-3.5 bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-8 w-full max-w-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <User size={20} />
          <h2 className="text-lg font-semibold">Create new account</h2>
        </div>
        <p className="text-gray-500 text-sm mb-6">Start now</p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Username"
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <Lock size={16} className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full outline-none text-sm"
                required
              />
            </div>
          </div>
          {!isValid && inputs.password && (
            <p className="text-red-500 text-xs flex items-center mt-1">
              ● Password must be 8+ characters
            </p>
          )}

          {/* Register button */}
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-700 text-white font-medium py-2 rounded-lg hover:bg-indigo-900 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

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
            Or Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
