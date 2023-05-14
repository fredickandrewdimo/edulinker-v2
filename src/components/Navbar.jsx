import React from "react";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    // Nav container
    <div className="bg-lightColor">
      <div className="w-11/12 mx-auto py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-textPrimaryLightColor text-xl font-bold flex items-center"
          >
            <FaSchool />
            <h1 className="ml-2">EduLinker</h1>
          </Link>
          {/* Theme Switching */}
          <ThemeSwitch />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
