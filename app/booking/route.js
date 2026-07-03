import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const booking = await Booking.create({
      user: body.user,
      event: body.event,
      seats: body.seats,
      totalAmount: body.totalAmount,
    });

    return NextResponse.json({
      success: true,
      message: "Booking Successful",
      booking,
    });

  } catch (error) {
    console.log(error);

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