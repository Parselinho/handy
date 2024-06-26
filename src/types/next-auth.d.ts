// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
  }

  interface JWT {
    id: string;
    email: string;
    name: string;
    role: string;
  }
}
