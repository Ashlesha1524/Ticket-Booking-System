"use client";

import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const res = await fetch("/api/booking");
    const data = await res.json();

    if (data.success) {
      const user = JSON.parse(localStorage.getItem("user"));

      const myBookings = data.bookings.filter(
        (booking) => booking.user?._id === user.id
      );

      setBookings(myBookings);
    }
  }

  async function cancelBooking(id) {

  const confirmCancel = confirm("Cancel this booking?");

  if (!confirmCancel) return;

  const res = await fetch(`/api/booking/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  alert(data.message);

  fetchBookings();
}

  return (
    <div className="min-h-screen bg-gray-200 p-8">

      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        My Bookings
      </h1>

      <div className="space-y-6">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <h2 className="text-2xl font-bold text-gray-900">
              {booking.event?.title}
            </h2>

            <p className="mt-2 font-semibold text-gray-800">
              Venue : {booking.event?.venue?.name}
            </p>

            <p className="font-semibold text-gray-800">
              Seats : {booking.seats.join(", ")}
            </p>

            <p className="font-semibold text-green-700">
              ₹ {booking.totalAmount}
            </p>

            <p className="font-semibold text-blue-700">
              {booking.status}
            </p>

            <p className="font-semibold text-blue-700">
  {booking.status}
</p>

<button
  onClick={() => cancelBooking(booking._id)}
  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold"
>
  Cancel Booking
</button>

          </div>

        ))}

      </div>

    </div>
  );
}