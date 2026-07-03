import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    await Event.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Event Deleted Successfully",
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