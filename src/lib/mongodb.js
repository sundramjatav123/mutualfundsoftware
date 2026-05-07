import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI;

let cached =
  global.mongoose;

if (!cached) {

  cached =
    global.mongoose = {

      conn: null,
      promise: null,

    };

}

async function connectDB() {

  // ENV CHECK
  if (!MONGODB_URI) {

    throw new Error(
      "Please define MONGODB_URI"
    );

  }

  // ALREADY CONNECTED
  if (cached.conn) {

    console.log(
      "✅ MongoDB Already Connected"
    );

    return cached.conn;

  }

  // CREATE CONNECTION
  if (!cached.promise) {

    cached.promise =
      mongoose.connect(
        MONGODB_URI,
        {
          dbName:
            "mutualfundsoftware",
        }
      ).then((mongoose) => {

        console.log(
          "🚀 MongoDB Connected Successfully"
        );

        return mongoose;

      });

  }

  cached.conn =
    await cached.promise;

  return cached.conn;

}

export default connectDB;