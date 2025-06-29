"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Demo login successful! Redirecting to homepage...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition font-medium"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="text-center mt-4">
            <Link
              href="/"
              className="text-orange-600 hover:text-orange-700 text-sm"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
