import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThemeSwitch = () => {
  return (
    <div className="text-textSecondaryLightColor hover:text-textPrimaryLightColor hover:bg-darkLightColor py-2 px-4 rounded">
      {/* Dark Mode */}
      <Link className="flex items-center justify-center" to="/">
        <FaRegMoon />
        <p className="ml-2">Dark Mode</p>
      </Link>
      {/* Light Mode */}
    </div>
  );
};

export default ThemeSwitch;
