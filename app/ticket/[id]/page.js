"use client";

import { useParams } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";

export default function TicketPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-10">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg">

        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Ticket Confirmed
        </h1>

        <p className="text-center text-gray-700 mt-4">
          Booking Reference
        </p>

        <p className="text-center font-bold text-indigo-700 break-all mb-8">
          {id}
        </p>

        <div className="flex justify-center">

          <QRCodeCanvas
            value={id}
            size={220}
          />

        </div>

        <p className="mt-8 text-center text-gray-700 font-semibold">
          Show this QR Code at the venue entrance.
        </p>

      </div>

    </div>
  );
}