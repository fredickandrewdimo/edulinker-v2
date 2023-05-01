import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="bg-lightWhite">
      <div className="w-11/12 mx-auto py-5">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold flex items-center">
            EduLinker
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
