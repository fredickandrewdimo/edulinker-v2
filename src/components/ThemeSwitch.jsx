import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThemeSwitch = () => {
  return (
    <div className="">
      <Link className="flex items-center justify-center" to="/">
        <FaRegMoon />
        <p className="ml-2">Dark Mode</p>
      </Link>
    </div>
  );
};

export default ThemeSwitch;
