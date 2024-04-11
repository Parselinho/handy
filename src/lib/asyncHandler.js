import { getDebugger } from "./debugger";
import { NextResponse } from "next/server";

const debug = getDebugger("async-error");

const asyncHandler = (cb) => async (req, res) => {
  try {
    return await cb(req, res);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Something went wrong";
    debug(`Error ${statusCode}: ${message}`);
    return NextResponse.json(
      {
        error: message,
      },
      { status: statusCode }
    );
  }
};

export default asyncHandler;
