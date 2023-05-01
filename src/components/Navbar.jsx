import React from "react";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="bg-lightWhite">
      <div className="w-11/12 mx-auto py-5">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold flex items-center">
            <FaSchool />
            <h1 className="ml-2">EduLinker</h1>
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
