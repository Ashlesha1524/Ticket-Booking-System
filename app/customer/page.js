"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function CustomerPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const res = await fetch("/api/event");
    const data = await res.json();

    if (data.success) {
      setEvents(data.events);
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 p-8">

      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Browse Events
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {events.map((event) => (

          <div
            key={event._id}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <h2 className="text-2xl font-bold text-gray-900">
              {event.title}
            </h2>

            <p className="text-gray-700 mt-2">
              {event.description}
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              Venue : {event.venue?.name}
            </p>

            <p className="font-semibold text-gray-900">
              Type : {event.eventType}
            </p>

            <p className="font-semibold text-gray-900">
              Date : {new Date(event.date).toLocaleDateString()}
            </p>

            <p className="font-semibold text-gray-900">
              Time : {event.time}
            </p>

            <p className="text-green-700 font-bold text-xl mt-3">
              ₹ {event.categoryPricing[0]?.price}
            </p>

                <Link href={`/booking/${event._id}`}>

                    <button
                        className="mt-5 w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-lg font-bold"
                    >
                        Book Ticket
                    </button>

                </Link>

          </div>

        ))}

      </div>

    </div>
  );
}