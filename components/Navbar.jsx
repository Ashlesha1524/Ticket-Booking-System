export default function Navbar() {
  return (
    <header className="h-20 bg-white shadow-md flex justify-between items-center px-10">

      <h2 className="text-3xl font-extrabold text-gray-900">
        Dashboard
      </h2>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition">
        Logout
      </button>

    </header>
  );
}