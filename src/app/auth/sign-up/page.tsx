"use client";
import { getDebugger } from "@/app/lib/debugger";
import { registerNewUser } from "@/app/lib/actions";
import FormInput from "../../(components)/forms/FormInput";
import SubmitBtn from "../../(components)/forms/SubmitBtn";
import toast from "react-hot-toast";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

const debug = getDebugger("sign-up-form");

const initialState = {
  message: null,
};

const Page = () => {
  const [state, formAction] = useFormState(registerNewUser, initialState);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
      {showForm && (
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
          <SubmitBtn text="Sign Up" />
          <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
          </p>
        </form>
      )}
    </main>
  );
};
export default Page;
