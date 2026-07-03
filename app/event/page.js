"use client";

import { useEffect, useState } from "react";

export default function EventPage() {
  const [venues, setVenues] = useState([]);

  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    title: "",
    description: "",
    venue: "",
    eventType: "Movie",
    date: "",
    time: "",
    price: "",
  });

  useEffect(() => {
    fetchVenues();
    fetchEvents();
  }, []);

  async function fetchVenues() {
    const res = await fetch("/api/venue");
    const data = await res.json();

    if (data.success) {
      setVenues(data.venues);
    }
  }
  async function fetchEvents() {
  const res = await fetch("/api/event");
  const data = await res.json();

  if (data.success) {
    setEvents(data.events);
  }
}

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const selectedVenue = venues.find(
      (v) => v._id === event.venue
    );

    const body = {
      title: event.title,
      description: event.description,
      venue: event.venue,
      eventType: event.eventType,
      date: event.date,
      time: event.time,
      organizer: null,
      categoryPricing: [
        {
          category: "Standard",
          price: Number(event.price),
        },
      ],
    };

    const res = await fetch("/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    alert(data.message);
    
    if (data.success) {
        fetchEvents();
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-6">

        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Event Management
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >

          <input
            name="title"
            placeholder="Event Title"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg p-3 text-gray-900 font-semibold"
            required
          />

          <select
            name="eventType"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg p-3 text-gray-900 font-semibold"
          >
            <option>Movie</option>
            <option>Concert</option>
          </select>

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg p-3 text-gray-900 font-semibold col-span-2"
          />

          <select
            name="venue"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg p-3 text-gray-900 font-semibold"
            required
          >
            <option value="">Select Venue</option>

            {venues.map((venue) => (
              <option
                key={venue._id}
                value={venue._id}
              >
                {venue.name}
              </option>
            ))}

          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg p-3 text-gray-900 font-semibold"
            required
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg p-3 text-gray-900 font-semibold"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Ticket Price"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-lg p-3 text-gray-900 font-semibold"
            required
          />

          <button
            className="col-span-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 rounded-lg"
          >
            Create Event
          </button>

        </form>

      </div>

    </div>
  );
}


