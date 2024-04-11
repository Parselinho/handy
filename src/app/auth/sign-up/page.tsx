"use client";
import { getDebugger } from "@/app/lib/debugger";
import { registerNewUser } from "@/app/lib/actions";
import FormInput from "../../(components)/forms/FormInput";
import SubmitBtn from "../../(components)/forms/SubmitBtn";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";

const debug = getDebugger("sign-up-form");

const initialState = {
  message: null,
};

const Page = () => {
  const [state, formAction] = useFormState(registerNewUser, initialState);
  return (
    <main>
      <form action={formAction}>
        <FormInput
          name="firstName"
          label="First Name:"
          type="text"
          placeholder="Your First Name"
        />
        <FormInput
          name="lastName"
          label="Last Name:"
          type="text"
          placeholder="Your Last Name"
        />
        <FormInput
          name="password"
          label="Password:"
          type="password"
          placeholder="******"
        />
        <FormInput
          name="confirmPassword"
          label="Confirm Password:"
          type="password"
          placeholder="******"
        />
        <FormInput
          name="email"
          label="Email:"
          type="email"
          placeholder="Your Email Here"
        />
        {state?.message && toast.error(state.message)}
        <SubmitBtn text="Sign Up" />
      </form>
    </main>
  );
};
export default Page;
