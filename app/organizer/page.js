import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";

export default function OrganizerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Sidebar />

      <div className="ml-64">

        <Navbar />

        <main className="p-10">

          <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
            Organizer Dashboard
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">

            <DashboardCard
              title="Total Venues"
              value="0"
              color="bg-blue-600"
            />

            <DashboardCard
              title="Total Events"
              value="0"
              color="bg-green-600"
            />

            <DashboardCard
              title="Revenue"
              value="₹0"
              color="bg-purple-600"
            />

          </div>

          <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

            <div className="flex justify-between items-center">

              <h2 className="text-3xl font-extrabold text-gray-900">
                Quick Actions
              </h2>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl">
                Create Event
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="border rounded-xl p-6 hover:shadow-md transition">

                <h3 className="text-2xl font-bold text-gray-900">
                  Create Venue
                </h3>

                <p className="mt-3 text-gray-600">
                  Add a new venue with seating layout.
                </p>

              </div>

              <div className="border rounded-xl p-6 hover:shadow-md transition">

                <h3 className="text-2xl font-bold text-gray-900">
                  Manage Events
                </h3>

                <p className="mt-3 text-gray-600">
                  Create and manage upcoming events.
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}