"use client";
import { registerNewUser } from "@/lib/actions";
import FormInput from "@/components/forms/FormInput";
import SubmitBtn from "@/components/forms/SubmitBtn";
import toast from "react-hot-toast";
import { useActionState, useState } from "react";
import { useEffect } from "react";

import Link from "next/link";
import ImageFile from "@/components/ImageFile";
import { useFormState } from "react-dom";

const initialState = {
  message: null,
};

const Page = () => {
  //   const [isLogin, setIsLogin] = useState(true);

  const [state, formAction] = useFormState(registerNewUser, initialState);

  //   const checkLogin = () => {
  //     setIsLogin((prevState) => !prevState);
  //   };

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content cardForSignUp">
          <div className="max-w-md">
            <form action={formAction}>
              <FormInput
                name="firstName"
                label="First Name:"
                type="text"
                placeholder="Your First Name"
                required
              />
              <FormInput
                name="lastName"
                label="Last Name:"
                type="text"
                placeholder="Your Last Name"
                required
              />
              <FormInput
                name="password"
                label="Password:"
                type="password"
                placeholder="******"
                required
              />
              <FormInput
                name="confirmPassword"
                label="Confirm Password:"
                type="password"
                placeholder="******"
                required
              />
              <FormInput
                name="email"
                label="Email:"
                type="email"
                placeholder="Your Email Here"
                required
              />
              <ImageFile label="Upload Image" name="image" />
              <SubmitBtn text="Sign Up" />
              <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
              </p>
            </form>
            <p>Already signed up?</p>
            <Link href="login">Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
