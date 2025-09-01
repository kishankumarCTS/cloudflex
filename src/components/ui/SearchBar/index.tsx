"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({}) {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div className="flex items-center w-full max-w-[380px]">
      <div className={"relative w-full after-style"}>
        <input
          type="text"
          value={state}
          onChange={handleChange}
          placeholder="Search"
          className="w-full py-3 pl-4 pr-10 bg-white rounded-[10px] shadow-md outline-none text-themeBlack-70"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <FaSearch className="text-themeBlack-70 opacity-80" />
        </div>
      </div>
    </div>
  );
}
