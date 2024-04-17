import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";

const Header = () => {
  return (
    <>
      <header className="navbar bg-base-100 border-b">
        <div className="navbar-start">
          <DropDown />
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image alt="logo" src="/logo.png" width={110} height={65} />
          </Link>
        </div>
        <div className="navbar-end"></div>
      </header>
    </>
  );
};
export default Header;
