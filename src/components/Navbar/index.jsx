"use client";
import Link from "next/link";
import InputSearch from "./inputSearch";
import SigninButton from "./SigninButton";

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
        <SigninButton />
      </div>
    </header>
  );
};
export default Navbar;
