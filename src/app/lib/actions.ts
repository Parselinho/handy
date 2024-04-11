"use server";
import { redirect } from "next/navigation";
import { customFetch } from "./customFetch";
import { getDebugger } from "./debugger";
const debug = getDebugger("actions");

export const saveUserAction = async (formData: FormData) => {
  const user = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    email: formData.get("email") as string,
  };
  try {
    await customFetch.post("/api/auth/sign-up", user);
  } catch (error) {
    console.error(error);
  }
};
