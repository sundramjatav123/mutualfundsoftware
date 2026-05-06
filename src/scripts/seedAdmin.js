import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(".env"),
});

import bcrypt from "bcryptjs";

const seedAdmin = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    const { default: connectDB } = await import("../lib/mongodb.js");
    const { default: User } = await import("../models/User.js");
    await connectDB();
    const existingAdmin = await User.findOne({
      email: "admin@gmail.com",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "admin123",
      10
    );

    await User.create({
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });
    console.log("🚀 Admin created successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedAdmin();