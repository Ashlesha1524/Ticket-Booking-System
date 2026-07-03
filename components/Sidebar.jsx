"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-indigo-700 text-white shadow-xl">

      <div className="p-6 border-b border-indigo-500">
        <h1 className="text-3xl font-extrabold">
          Ticket Booking
        </h1>
      </div>

      <nav className="mt-6">

        <ul className="space-y-2 px-4">

          <li>
            <Link
              href="/organizer"
              className="block px-4 py-3 rounded-lg text-lg font-bold hover:bg-indigo-600 transition"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/venue"
              className="block px-4 py-3 rounded-lg text-lg font-bold hover:bg-indigo-600 transition"
            >
              Venues
            </Link>
          </li>

          <li>
            <Link
              href="/event"
              className="block px-4 py-3 rounded-lg text-lg font-bold hover:bg-indigo-600 transition"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              href="/customer"
              className="block px-4 py-3 rounded-lg text-lg font-bold hover:bg-indigo-600 transition"
            >
              Bookings
            </Link>
          </li>

                  <li>
                      <Link
                          href="/my-bookings"
                          className="block px-4 py-3 rounded-lg text-lg font-bold hover:bg-indigo-600 transition"
                      >
                          My Bookings
                      </Link>
                  </li>

        </ul>

      </nav>

    </aside>
  );
}