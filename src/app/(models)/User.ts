import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Joi from "joi";
const { Schema } = mongoose;

export interface IUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
  image: string;
}

const UserSchema = new Schema<IUser>({
  firstName: String,
  lastName: String,
  password: String,
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  image: {
    type: String,
    default: "",
  },
});

// hash password only when user creation or when updating password
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// compare password
UserSchema.methods.comparePassword = async function (inputPassword: string) {
  const isMatch = await bcrypt.compare(inputPassword, this.password);
  return isMatch;
};

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export const userValidation = Joi.object({
  firstName: Joi.string().min(2).max(15).required(),
  lastName: Joi.string().min(2).max(15).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  confirmPassword: Joi.valid(Joi.ref("password")).required().messages({
    "any.only": "password not match",
  }),
});

export const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
