import mongoose from "mongoose";
import { getDebugger } from "./debugger";

const debug = getDebugger("db");
// const debug = require("debug")("app:db");

export async function connectDB(url: string): Promise<void> {
  try {
    await mongoose.connect(url);
    debug("Database connected");
  } catch (error: any) {
    debug("Database connection failed: ", error);
  }
}
