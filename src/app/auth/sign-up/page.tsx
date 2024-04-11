"use client";
import { getDebugger } from "@/app/lib/debugger";
import { saveUserAction } from "@/app/lib/actions";
import FormInput from "../../(components)/forms/FormInput";
import SubmitBtn from "../../(components)/forms/SubmitBtn";
// import { useFormState } from "react-dom";

const debug = getDebugger("sign-up-form");

const Page = () => {
  //   const [state, formAction] = useFormState(saveUserAction, { message: null });

  return (
    <main>
      <form action={saveUserAction}>
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
          placeholder="**"
        />
        <FormInput
          name="confirmPassword"
          label="Confirm Password:"
          type="password"
          placeholder="**"
        />
        <FormInput
          name="email"
          label="Email:"
          type="email"
          placeholder="Your Email Here"
        />
        <SubmitBtn text="Sign Up" />
      </form>
    </main>
  );
};
export default Page;
