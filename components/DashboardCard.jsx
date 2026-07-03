export default function DashboardCard({
  title,
  value,
  color = "bg-indigo-600",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">

      <div className={`w-14 h-14 rounded-xl ${color}`}></div>

      <h3 className="mt-5 text-lg font-bold text-gray-700">
        {title}
      </h3>

      <h1 className="mt-3 text-5xl font-extrabold text-gray-900">
        {value}
      </h1>

    </div>
  );
}