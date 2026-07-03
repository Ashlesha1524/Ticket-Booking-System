import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Venue from "@/models/Venue";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const venue = await Venue.create({
      name: body.name,
      city: body.location,
      address: body.location,
      totalRows: Number(body.rows),
      seatsPerRow: Number(body.cols),
      categories: [
        {
          name: "Standard",
          price: 200,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Venue Added Successfully",
      venue,
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

    const venues = await Venue.find();

    return NextResponse.json({
      success: true,
      venues,
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