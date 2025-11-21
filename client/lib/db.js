import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect("mongodb+srv://amishhhaaaa_db_user:tina@cluster0.eatdhjz.mongodb.net/?appName=Cluster0");
  console.log("DB Connected");
};
