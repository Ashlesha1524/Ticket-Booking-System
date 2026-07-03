import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";
import User from "@/models/User";
import Event from "@/models/Event";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const booking = await Booking.create(body);

    return NextResponse.json({
      success: true,
      message: "Ticket Booked Successfully",
      booking,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const bookings = await Booking.find()
      .populate("user")
      .populate({
        path: "event",
        populate: {
          path: "venue",
        },
      });

    return NextResponse.json({
      success: true,
      bookings,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}