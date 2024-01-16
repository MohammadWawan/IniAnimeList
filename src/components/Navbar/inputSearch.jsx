"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="cari anime.."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      ></input>
      <button className="absolute top-2 end-2">
        <CiSearch size={24} onClick={handleSearch} />
      </button>
    </div>
  );
};

export default InputSearch;
