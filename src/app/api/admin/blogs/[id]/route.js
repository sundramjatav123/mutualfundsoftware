import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Blog from "@/models/Blog";

import imagekit from "@/lib/imagekit";

export async function PUT(
  req,
  { params }
) {
  try {

    await connectDB();

    const data =
      await req.formData();

    const title =
      data.get("title");

    const category =
      data.get("category");

    const description =
      data.get("description");

    const file =
      data.get("image");

    let updateData = {
      title,
      category,
      description,
    };

    if (file) {

      const bytes =
        await file.arrayBuffer();

      const buffer =
        Buffer.from(bytes);

      const uploadedImage =
        await imagekit.upload({
          file: buffer,
          fileName: file.name,
        });

      updateData.image =
        uploadedImage.url;
    }

    const updatedBlog =
      await Blog.findByIdAndUpdate(
        params.id,
        updateData,
        {
          new: true,
        }
      );

    return NextResponse.json({
      success: true,
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
  { params }
) {
  try {

    await connectDB();

    await Blog.findByIdAndDelete(
      params.id
    );

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