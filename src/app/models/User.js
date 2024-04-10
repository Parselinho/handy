import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Joi from "joi";
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: {
    type: String,
    unique: true,
  },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

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
