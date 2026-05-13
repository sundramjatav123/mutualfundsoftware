import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import imagekit from "@/lib/imagekit";

export async function PUT(
  req,
  context
) {
  try {

    const params =
      await context.params;

    await connectDB();

    const formData =
      await req.formData();

    const testimonial =
      await Testimonial.findById(
        params.id
      );

    if (!testimonial) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Testimonial not found",
        },
        {
          status: 404,
        }
      );
    }

    testimonial.name =
      formData.get("name");

    testimonial.title =
      formData.get("title");

    testimonial.designation =
      formData.get(
        "designation"
      );

    testimonial.city =
      formData.get("city");

    testimonial.description =
      formData.get(
        "description"
      );

    const file =
      formData.get("image");

    if (
      file &&
      file.name
    ) {

      const bytes =
        await file.arrayBuffer();

      const buffer =
        Buffer.from(bytes);

      const uploadedImage =
        await imagekit.upload({
          file: buffer,
          fileName: file.name,
        });

      testimonial.image =
        uploadedImage.url;
    }

    await testimonial.save();

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

export async function DELETE(
  req,
  context
) {
  try {

    const params =
      await context.params;

    await connectDB();

    await Testimonial.findByIdAndDelete(
      params.id
    );

    return NextResponse.json({
      success: true,
      message:
        "Deleted successfully",
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