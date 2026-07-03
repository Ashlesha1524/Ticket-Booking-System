"use client";

import { useEffect, useState } from "react";

export default function VenuePage() {
    const [venue, setVenue] = useState({
        name: "",
        location: "",
        rows: "",
        cols: "",
    });

    const [venues, setVenues] = useState([]);

    const handleChange = (e) => {
        setVenue({
            ...venue,
            [e.target.name]: e.target.value,
        });
    };

    const fetchVenues = async () => {
        const res = await fetch("/api/venue");
        const data = await res.json();

        if (data.success) {
            setVenues(data.venues);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/venue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(venue),
        });

        const data = await response.json();

        alert(data.message);

        if (data.success) {
            setVenue({
                name: "",
                location: "",
                rows: "",
                cols: "",
            });

            fetchVenues();
        }
    };

    const deleteVenue = async (id) => {
        const confirmDelete = confirm("Delete this venue?");

        if (!confirmDelete) return;

        const res = await fetch(`/api/venue/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        alert(data.message);

        fetchVenues();
    };
    return (
        <div className="min-h-screen bg-gray-200 py-6 px-4">

            <div className="max-w-6xl mx-auto">

                <div className="bg-white rounded-xl shadow-xl p-8">

                    <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
                        Venue Management
                    </h1>

                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="block font-bold text-gray-900 mb-2">
                                Venue Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={venue.name}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-400 rounded-lg px-4 py-3 text-gray-900"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold text-gray-900 mb-2">
                                City / Location
                            </label>

                            <input
                                type="text"
                                name="location"
                                value={venue.location}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-400 rounded-lg px-4 py-3 text-gray-900"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold text-gray-900 mb-2">
                                Rows
                            </label>

                            <input
                                type="number"
                                name="rows"
                                value={venue.rows}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-400 rounded-lg px-3 py-2 text-gray-900 font-semibold"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-bold text-gray-900 mb-2">
                                Seats Per Row
                            </label>

                            <input
                                type="number"
                                name="cols"
                                value={venue.cols}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-400 rounded-lg px-3 py-2 text-gray-900 font-semibold"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">

                            <button
                                className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-6 py-2 rounded-lg"
                            >
                                Save Venue
                            </button>

                        </div>

                    </form>

                </div>

                <div className="bg-white rounded-xl shadow-xl p-8 mt-10">

                    <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
                        All Venues
                    </h2>

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-indigo-700 text-white text-base font-bold">

                                <th className="p-4">Venue</th>

                                <th className="p-4">City</th>

                                <th className="p-4">Rows</th>

                                <th className="p-4">Seats / Row</th>

                                <th className="p-4">Action</th>

                            </tr>

                        </thead>

                        <tbody>
                            {venues.map((v) => (

                                <tr
                                    key={v._id}
                                    className="border-b border-gray-300 hover:bg-gray-100 text-center"
                                >

                                    <td className="p-4 text-gray-900 font-bold text-base">
                                        {v.name}
                                    </td>

                                    <td className="p-4 text-gray-800 font-semibold">
                                        {v.city}
                                    </td>

                                    <td className="p-4 text-gray-800 font-semibold">
                                        {v.totalRows}
                                    </td>

                                    <td className="p-4 text-gray-800 font-semibold">
                                        {v.seatsPerRow}
                                    </td>

                                    <td className="p-4">

                                        <button
                                            onClick={() => deleteVenue(v._id)}
                                            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}