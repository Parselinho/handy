"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, text }: { href: string; text: string }) => {
  const path = usePathname();
  return <Link href={href}>{text}</Link>;
};
export default NavLink;
