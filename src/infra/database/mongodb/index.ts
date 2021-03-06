import mongoose from "mongoose";

export const connect = (
  uri = process.env.MONGO_URI
): Promise<mongoose.Mongoose> => {
  return mongoose.connect(String(uri), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const disconnect = (): Promise<void> => mongoose.disconnect();
