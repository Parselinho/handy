import { NextApiRequest, NextApiResponse } from "next";
import { getDebugger } from "./debugger";
import { NextRequest, NextResponse } from "next/server";

const debug = getDebugger("async-error");
type Handler = (
  req: NextRequest,
  res: NextResponse
) => Promise<NextResponse | void>;

const asyncHandler =
  (cb: Handler) => async (req: NextRequest, res: NextResponse) => {
    try {
      return await cb(req, res);
    } catch (error: any) {
      const statusCode = error.statusCode || 500;
      const message = error.message || "Something went wrong";
      debug(`Error ${statusCode}: ${message}`);
      return NextResponse.json(
        {
          error: message,
        },
        { status: statusCode }
      );
      //   return new Response(
      //     JSON.stringify({ error: message, status: statusCode })
      //   );
    }
  };

export default asyncHandler;