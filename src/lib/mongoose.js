import mongoose from "mongoose";
import { getDebugger } from "./debugger";

const debug = getDebugger("db");
// const debug = require("debug")("app:db");

export async function connectDB(url) {
  try {
    await mongoose.connect(url);
    debug("Database connected");
  } catch (error) {
    debug("Database connection failed: ", error);
  }
}
