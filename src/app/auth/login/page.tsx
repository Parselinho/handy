"use client";

import { signIn } from "next-auth/react";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

// "use client";
// import { signIn } from "next-auth/react";

// const SignInPage = () => {
//   const handleSignIn = () => {
//     signIn('credentials', {email: , password: })
//   };

//   return (
//     <>
//       <h1>Login</h1>
//       <button
//         onClick={handleSignIn}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Sign In
//       </button>
//     </>
//   );
// };
// export default SignInPage;
