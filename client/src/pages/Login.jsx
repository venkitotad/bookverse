import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Login() {
  
    const navigate = useNavigate();
  
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (e) => {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    console.log(inputs);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const res = await axios.post("/api/auth/signin", inputs);
      console.log(res);
      navigate('/')
    };
  
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc] relative overflow-hidden">
      {/* Purple blurred circle in background */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full filter blur-[100px] opacity-70 z-0"></div>

      {/* Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Sign in to continue</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center py-3 border border-gray-300 bg-white hover:bg-gray-100 rounded-lg"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57c2.08-1.92,3.28-4.74,3.28-8.09Z"/>
            <path fill="#34A853" d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z"/>
            <path fill="#FBBC05" d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l3.66-2.84Z"/>
            <path fill="#EA4335" d="M12,5.16c1.55,0,2.95.54,4.08,1.58l3.17-3.17C17.45,1.99,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z"/>
          </svg>
          <span className="text-gray-800">Sign in with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="font-semibold text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
