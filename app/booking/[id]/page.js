"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {
    const { id } = useParams();

    const [selectedSeats, setSelectedSeats] = useState([]);
    function toggleSeat(seat) {

        if (selectedSeats.includes(seat)) {

            setSelectedSeats(
                selectedSeats.filter((s) => s !== seat)
            );

        } else {

            setSelectedSeats([
                ...selectedSeats,
                seat,
            ]);

        }

    }


    async function confirmBooking() {

        if (selectedSeats.length === 0) {
            alert("Please select at least one seat");
            return;
        }

        // Get the logged-in user
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Please login first");
            return;
        }

        const bookingData = {
            user: user.id,
            event: id,
            seats: selectedSeats,
            totalAmount: selectedSeats.length * 250,
        };

        const res = await fetch("/api/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        });

        const data = await res.json();

        if (data.success) {

            window.location.href = `/ticket/${data.booking._id}`;

        }
    }

    return (
        <div className="min-h-screen bg-gray-200 p-8">

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">

                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                    Book Ticket
                </h1>

                <p className="text-lg font-semibold text-gray-800">
                    Event ID:
                </p>

                <p className="text-indigo-700 font-bold break-all">
                    {id}
                </p>

                <div className="mt-8">

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Seat Selection
                    </h2>

                    <div className="grid grid-cols-10 gap-3">

                        {Array.from({ length: 50 }).map((_, index) => (

                            <button
                                key={index}
                                onClick={() => toggleSeat(index + 1)}
                                className={`h-12 rounded-lg font-bold text-white transition

  ${selectedSeats.includes(index + 1)
                                        ? "bg-red-600"
                                        : "bg-green-600 hover:bg-green-700"
                                    }
  `}
                            >
                                {index + 1}
                            </button>

                        ))}

                    </div>
                    <div className="mt-6">

                        <h3 className="text-xl font-bold text-gray-900">
                            Selected Seats
                        </h3>

                        <p className="text-lg font-semibold text-indigo-700 mt-2">

                            {selectedSeats.length === 0
                                ? "No Seat Selected"
                                : selectedSeats.join(", ")}

                        </p>

                    </div>

                    <button
                        onClick={confirmBooking}
                        className="mt-8 w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-lg font-bold"
                    >
                        Confirm Booking
                    </button>

                </div>

            </div>

        </div>
    );
}