"use client";
import { getDebugger } from "@/app/lib/debugger";
import { saveUserAction } from "@/app/lib/actions";
import { customFetch } from "@/app/lib/customFetch";

const debug = getDebugger("sign-up-form");

const Page = () => {
  //   const onSubmit = async (e: any) => {
  //     e.preventDefault();
  //   };

  return (
    <main>
      <form action={saveUserAction}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
export default Page;
