import { getServerSession } from "next-auth";
import { NextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayOut({ children }: AuthLayoutProps) {
  const session = await getServerSession(NextAuthOptions);
  console.log(session);
  if (session) {
    redirect("/");
  }
  return <>{children}</>;
}
