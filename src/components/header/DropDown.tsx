import Link from "next/link";

const DropDown = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/">Services (test)</Link>
        </li>
        <li>
          <div className="row">
            <Link href="/auth/sign-up">Sign up / Login</Link>
          </div>
        </li>
        <li>
          <Link href="/">Test</Link>
        </li>
      </ul>
    </div>
  );
};
export default DropDown;
