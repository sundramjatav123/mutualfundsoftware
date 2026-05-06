import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Faq from "@/models/Faq";


// UPDATE FAQ
export async function PUT(
  req,
  context
) {

  try {

    await connectDB();

    const { id } =
      await context.params;

    const body = await req.json();

    const {
      question,
      answer,
    } = body;

    const updatedFaq =
      await Faq.findByIdAndUpdate(
        id,
        {
          question,
          answer,
        },
        {
          new: true,
        }
      );

    return NextResponse.json({
      success: true,
      message:
        "FAQ updated successfully",
      data: updatedFaq,
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


// DELETE FAQ
export async function DELETE(
  req,
  context
) {

  try {

    await connectDB();

    const { id } =
      await context.params;

    await Faq.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message:
        "FAQ deleted successfully",
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