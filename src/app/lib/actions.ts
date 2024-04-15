"use server";
import { revalidatePath } from "next/cache";
import { customFetch } from "./customFetch";
import { getDebugger } from "./debugger";

const debug = getDebugger("actions");

export const registerNewUser = async (prevState: any, formData: FormData) => {
  const user = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    email: formData.get("email") as string,
  };
  //   revalidatePath("/auth/sign-up");
  try {
    const { data } = await customFetch.post("/api/auth/sign-up", user);
    return data;
  } catch (error: any) {
    return { message: error.response.data.error };
  }
};
