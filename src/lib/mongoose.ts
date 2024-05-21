import mongoose from "mongoose";
import { getDebugger } from "./debugger";
import { BadRequestError } from "./ErrorHandler";

const debug = getDebugger("db");

// export async function connectDB(url: string | undefined): Promise<void> {
//   if (!url) {
//     debug("Database connection URL is undefined");
//     throw new Error("Database connection URL is not provided.");
//   }
//   try {
//     await mongoose.connect(url);
//     debug("Database connected");
//   } catch (error: any) {
//     debug("Database connection failed: ", error);
//   }
// }

export async function connectDB() {
  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI)
    throw new BadRequestError(
      "issue with connecting to database, issue with connection string"
    );
  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.error("error connecting to database due to: ", error);
  }
}
