import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    mongoose.connection.on("error", (err) =>
      console.log("DB Connection Error:", err)
    );
    mongoose.connection.on("disconnected", () =>
      console.log("Database Disconnected")
    );

    console.log("Connecting to DB...");

    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};

export default connectDB;
