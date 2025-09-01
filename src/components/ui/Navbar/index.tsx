import React from "react";
import SearchBar from "../SearchBar";
import SelectServer from "./SelectServer";

const Navbar = () => {
  return (
    <nav className="py-4 flex items-center justify-between px-7">
      <SearchBar />
      <SelectServer />
    </nav>
  );
};

export default Navbar;
