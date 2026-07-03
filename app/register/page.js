"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-center text-gray-900">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Register to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Register As
            </label>

            <select
              name="role"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option value="customer">Customer</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold shadow-lg transition duration-300"
          >
            Create Account
          </button>

        </form>

        <div className="mt-8 text-center text-gray-700">
          Already have an account?
          <button
            type="button"
            className="ml-2 text-indigo-600 font-semibold hover:underline"
          >
            Login
          </button>
        </div>

      </div>

    </div>
  );
}