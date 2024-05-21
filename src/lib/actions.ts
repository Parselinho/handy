"use server";
import { customFetch } from "./customFetch";
import { revalidatePath } from "next/cache";
import { BadRequestError } from "./ErrorHandler";
import uploadFileToS3 from "./uploadFileToS3";
import { redirect } from "next/navigation";

export const registerNewUser = async (prevState: any, formData: FormData) => {
  const image = formData.get("image") as File;
  if (!image) return;
  if (!["image/jpeg", "image/png"].includes(image.type.toLowerCase())) {
    throw new BadRequestError("Image type should be JPEG or PNG Only.");
  }
  if (image.size > 1024 * 1024 * 5) {
    throw new BadRequestError("Image size should not exceed 5MB.");
  }
  const buffer = Buffer.from(await image.arrayBuffer());
  const uploadedImage = await uploadFileToS3(buffer, image.name, image.type);

  const user = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    email: formData.get("email") as string,
    image: uploadedImage,
  };
  try {
    const { data } = await customFetch.post("/api/auth/sign-up", user);
    revalidatePath("/");
    // redirect("/");
    return data;
  } catch (error: any) {
    console.log(error.response.data.error);
    return { message: error.response.data.error };
  }
};

export const SignInUser = async (prevState: any, formData: FormData) => {};
