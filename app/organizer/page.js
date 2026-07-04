"use client";

import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";

export default function OrganizerDashboard() {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

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

        </main>

      </div>

    </div>
  );
}