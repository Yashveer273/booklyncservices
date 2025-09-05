"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel (Form) */}
        <motion.div
          key={isSignIn ? "signin" : "signup"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10"
        >
          {isSignIn ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Sign In</h2>
              <input
                type="text"
                placeholder="User ID"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e03e00]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e03e00]"
              />
              <button className="w-full bg-[#e03e00] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                Sign In
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e03e00]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e03e00]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#e03e00]"
              />
              <button className="w-full bg-[#e03e00] text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                Sign Up
              </button>
            </>
          )}
        </motion.div>

        {/* Right Panel (Overlay / Switcher) */}
        <motion.div
          key={isSignIn ? "signin-right" : "signup-right"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center text-center bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 sm:p-10"
        >
          {isSignIn ? (
            <>
              <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
              <p className="mb-6">
                Enter your personal details and start your journey with us
              </p>
              <button
                onClick={() => setIsSignIn(false)}
                className="bg-white text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="mb-6">To keep connected, please sign in again</p>
              <button
                onClick={() => setIsSignIn(true)}
                className="bg-white text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Sign In
              </button>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
