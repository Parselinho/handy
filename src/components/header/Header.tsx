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
            <Image
              alt="logo"
              src="/logo.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
            {/* <Image
              alt="logo"
              src="/logo.png"
              width={110}
              height={65}
              style={{ width: "auto", height: "auto" }}
            /> */}
          </Link>
        </div>
        <div className="navbar-end"></div>
      </header>
    </>
  );
};
export default Header;
