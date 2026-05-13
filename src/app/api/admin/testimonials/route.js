import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";
import imagekit from "@/lib/imagekit";

export async function GET() {
  try {
    await connectDB();

    const testimonials =
      await Testimonial.find().sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      data: testimonials,
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

    const formData =
      await req.formData();

    const name =
      formData.get("name");

    const title =
      formData.get("title");

    const designation =
      formData.get(
        "designation"
      );

    const city =
      formData.get("city");

    const description =
      formData.get(
        "description"
      );

    const file =
      formData.get("image");

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

    const testimonial =
      await Testimonial.create({
        name,
        title,
        designation,
        city,
        description,
        image: imageUrl,
      });

    return NextResponse.json({
      success: true,
      data: testimonial,
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