import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    await Booking.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Booking Cancelled Successfully",
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