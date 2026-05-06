import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import SiteSetting from "@/models/SiteSetting";

export async function GET() {
  try {
    await connectDB();
    const settings =
      await SiteSetting.findOne();
    return NextResponse.json({
      success: true,
      data: settings,
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
      websiteName,
      phone,
      whatsapp,
      email,
      address,
    } = body;
    if (
      !websiteName ||
      !phone ||
      !whatsapp ||
      !email ||
      !address
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

    let settings =
      await SiteSetting.findOne();

    if (settings) {

      settings.websiteName =
        websiteName;

      settings.phone = phone;

      settings.whatsapp =
        whatsapp;

      settings.email = email;

      settings.address =
        address;

      await settings.save();

    }

    else {
      settings =
        await SiteSetting.create({
          websiteName,
          phone,
          whatsapp,
          email,
          address,
        });

    }

    return NextResponse.json({
      success: true,
      message:
        "Settings saved successfully",
      data: settings,
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