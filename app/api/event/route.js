import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const event = await Event.create(body);

    return NextResponse.json({
      success: true,
      message: "Event Created Successfully",
      event,
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

    const events = await Event.find().populate("venue");

    return NextResponse.json({
      success: true,
      events,
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