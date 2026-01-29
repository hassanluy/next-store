import React from "react";
import Darkmode from "./darkMode";
import Logo from "./logo";
import LinksDropdown from "./linksDropdown";
import NavSearch from "./navSearch";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-3  border-b mx-20 ">
      <Logo />
      <NavSearch />
      <div className="flex gap-5 items-center">
        <Darkmode />
        <LinksDropdown />
      </div>
    </div>
  );
}

export default Navbar;
