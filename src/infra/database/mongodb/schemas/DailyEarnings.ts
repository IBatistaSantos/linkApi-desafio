import mongoose from "mongoose";

const dailyEarnings = new mongoose.Schema(
  {
    total: Number,
    day: Date,
  },
  {
    timestamps: true,
  }
);

const DailyEarnings = mongoose.model("DailyEarnings", dailyEarnings);

export { DailyEarnings };
