import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      name,
      email,
      mobile,
      service,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !mobile ||
      !service ||
      !message
    ) {

      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      mobile,
      service,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      data: contact,
    });

  } catch (error) {
    console.log("CONTACT API ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {

  try {
    await connectDB();
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      data: contacts,
    });

  } catch (error) {
    console.log("FETCH CONTACT ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch contacts",
      },
      { status: 500 }
    );
  }
}