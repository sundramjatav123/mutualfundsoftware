import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";



export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });
    return NextResponse.json({
      success: true,
      data: blogs,
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



export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      category,
      description,
    } = body;
    if (
      !title ||
      !category ||
      !description
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

    const blog =
      await Blog.create({
        title,
        category,
        description,
      });

    return NextResponse.json({
      success: true,
      message:
        "Blog added successfully",
      data: blog,
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