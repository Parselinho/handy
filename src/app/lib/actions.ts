"use server";

import { getDebugger } from "./debugger";
const debug = getDebugger("actions");
import { IUser } from "../(models)/User";

export const saveUserAction = async (formData: FormData) => {
  debug(formData);
  const user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    password: formData.get("password"),
    email: formData.get("email"),
  };
  debug("user", user);
};
