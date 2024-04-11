"use server";

import { getDebugger } from "./debugger";
const debug = getDebugger("actions");
import { IUser } from "../(models)/User";

export const saveUserAction = async (formData: FormData) => {
  debug(formData);
  const user = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    password: formData.get("password") as string,
    email: formData.get("email") as string,
  };
  debug("user", user);
};
