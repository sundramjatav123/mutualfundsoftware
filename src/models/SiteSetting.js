import mongoose from "mongoose";

const siteSettingSchema = new mongoose.Schema(
  {
    websiteName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    whatsapp: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

  },
  {
    timestamps: true,
  }
);

const SiteSetting =
  mongoose.models.SiteSetting ||
  mongoose.model(
    "SiteSetting",
    siteSettingSchema
  );

export default SiteSetting;