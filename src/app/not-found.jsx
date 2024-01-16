import Link from "next/link";
import { FiSearch } from "react-icons/fi";
const Page = () => {
  return (
    <div className="min-h-screen max-w-wl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FiSearch size={24} className="text-color-primary" />
        <h1 className="text-color-accent font-bold text-xl">NOT FOUND</h1>
        <Link
          href="/"
          className="text-color-primary hover:text-color-accent underline"
        >
          {" "}
          kembali
        </Link>
      </div>
    </div>
  );
};
export default Page;
