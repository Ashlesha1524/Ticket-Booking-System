import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Venue from "@/models/Venue";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    await Venue.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Venue Deleted Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}