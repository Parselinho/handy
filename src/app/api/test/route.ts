import { connectDB } from "../../lib/mongoose";
import { User, userValidation, loginValidation } from "../../(models)/User";
import { BadRequestError } from "../../lib/ErrorHandler";
import asyncHandler from "../../lib/asyncHandler";
import { NextResponse } from "next/server";
import { getDebugger } from "@/app/lib/debugger";
const debug = getDebugger("route");

export const POST = asyncHandler(async (req: Request, res: NextResponse) => {
  await connectDB(process.env.MONGODB_URI);
  const data = await req.json();
  const { email, firstName, lastName, password } = data;

  const { error } = userValidation.validate(data);
  if (error) throw new BadRequestError(error.details[0].message);
  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) {
    throw new BadRequestError("email is already exist");
  }
  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });

  await user.save();

  return NextResponse.json(
    {
      message: `Success Signing Up!`,
      success: true,
      user,
    },
    { status: 201 }
  );
});
