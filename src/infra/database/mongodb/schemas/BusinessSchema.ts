import mongoose from "mongoose";

const businesstSchema = new mongoose.Schema(
  {
    code: Number,
    creator_user_id: String,
    creator_name: String,
    creator_email: String,
    client_name: String,
    client_email: String,
    client_phone: String,
    title: String,
    add_time: Date,
    value: Number,
    currency: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Business = mongoose.model("Business", businesstSchema);

export { Business };
