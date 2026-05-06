import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Faq from "@/models/Faq";


// GET FAQS
export async function GET() {

  try {

    await connectDB();

    const faqs =
      await Faq.find().sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      data: faqs,
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


// ADD FAQ
export async function POST(req) {

  try {

    await connectDB();

    const body = await req.json();

    const {
      question,
      answer,
    } = body;

    // VALIDATION
    if (
      !question ||
      !answer
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "All fields are required",
        },
        {
          status: 400,
        }
      );

    }

    const faq =
      await Faq.create({
        question,
        answer,
      });

    return NextResponse.json({
      success: true,
      message:
        "FAQ added successfully",
      data: faq,
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