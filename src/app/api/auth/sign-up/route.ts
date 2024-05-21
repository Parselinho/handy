import { connectDB } from "../../../../lib/mongoose";
import { User, userValidation, loginValidation } from "../../../../models/User";
import { BadRequestError } from "../../../../lib/ErrorHandler";
import asyncHandler from "../../../../lib/asyncHandler";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB();
  const data = await req.json();
  const { error, value } = userValidation.validate(data);
  if (error) throw new BadRequestError(error.details[0].message);
  const isEmailExist = await User.findOne({ email: value.email });
  if (isEmailExist) {
    throw new BadRequestError("email is already exist");
  }
  if (!error && !isEmailExist) {
    const user = new User(value);
    await user.save();
    return NextResponse.json(
      {
        message: `User Successfully Created!`,
        success: true,
        user,
      },
      { status: 201 }
    );
  }
});
