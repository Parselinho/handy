"use client";
import { signOut, useSession } from "next-auth/react";

const ShowUser = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="ml-auto flex gap-4 items-center">
      <span>{session?.user?.name}</span>
      <button
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-600 text-white font-medium text-sm px-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};
export default ShowUser;
