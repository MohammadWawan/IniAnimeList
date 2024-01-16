"use client";
import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link
          href="/"
          className="font-bold text-white text-xl  text-color-dark"
        >
          INIANIMELIST
        </Link>
        <InputSearch />
        <Link href="api/auth/signin" className="text-color-primary">
          Sign In
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
