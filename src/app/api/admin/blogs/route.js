import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import imagekit from "@/lib/imagekit";

export async function GET() {
  try {
    await connectDB();

    const blogs =
      await Blog.find().sort({
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

    let imageUrl = "";

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

      imageUrl =
        uploadedImage.url;
    }

    const blog =
      await Blog.create({
        title,
        category,
        description,
        image: imageUrl,
      });

    return NextResponse.json({
      success: true,
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