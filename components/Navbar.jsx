"use client";

export default function Navbar() {

  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <header className="h-20 bg-white shadow-md flex justify-between items-center px-10">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Dashboard
      </h2>

      <button
        onClick={logout}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl"
      >
        Logout
      </button>
    </header>
  );
}