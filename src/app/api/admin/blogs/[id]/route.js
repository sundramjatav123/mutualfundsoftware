import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function PUT(req, context) {
  try {
    await connectDB();
    const { id } =
      await context.params;
    const body = await req.json();
    const {
      title,
      category,
      description,
    } = body;

    const updatedBlog =
      await Blog.findByIdAndUpdate(
        id,
        {
          title,
          category,
          description,
        },
        {
          new: true,
        }
      );

    return NextResponse.json({
      success: true,
      message:
        "Blog updated successfully",
      data: updatedBlog,
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


export async function DELETE(
  req,
  context
) {
  try {
    await connectDB();
    const { id } =
      await context.params;
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      message:
        "Blog deleted successfully",
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