"use server";
import { customFetch } from "./customFetch";
import { getDebugger } from "./debugger";

const debug = getDebugger("actions");

// function isInvalidText(text: any) {
//   return !text || text.trim() == "";
// }

export const registerNewUser = async (formData: FormData) => {
  const user = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    email: formData.get("email") as string,
  };
  //   if (
  //     isInvalidText(user.firstName) ||
  //     isInvalidText(user.lastName) ||
  //     isInvalidText(user.password) ||
  //     isInvalidText(user.confirmPassword) ||
  //     isInvalidText(user.email)
  //   ) {
  //     return {
  //       message: "Invalid Input",
  //     };
  //   }

  try {
    await customFetch.post("/api/auth/sign-up", user);
  } catch (error: any) {
    return { success: false, message: error.response.data.error };
  }
};
