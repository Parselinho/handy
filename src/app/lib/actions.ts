"use server";
import { customFetch } from "./customFetch";
import { getDebugger } from "./debugger";
const debug = getDebugger("actions");

export const saveUserAction = async (formData: FormData) => {
  debug(formData);
  const user = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    email: formData.get("email") as string,
  };
  try {
    await customFetch.post("/api/test", user);
  } catch (error) {
    console.log(error);
  }
};
