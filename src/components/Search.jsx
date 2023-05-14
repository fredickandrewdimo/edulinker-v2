import React from "react";

// React icons
import { IoSearchOutline } from "react-icons/io5";

// Hooks
import { useState, useContext } from "react";
import { MyContext } from "../context/MyProvider";

const Search = () => {
  const { setQuery } = useContext(MyContext);

  return (
    // Search Box container
    <div className="">
      <form className="py-2 px-2 bg-white rounded flex items-center">
        {/* search icon */}
        <div className="h-8 w-8 bg-textSecondaryLightColor rounded flex items-center justify-center">
          <IoSearchOutline className="text-lightColor text-xl" />
        </div>

        {/* search input */}
        <input
          type="text"
          className="mr-2 py-2 px-2 rounded border-none w-96 min-w-100% focus:outline-none"
          placeholder="Search a student name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* search btn */}
        {/* <button
          type="submit"
          className="py-2 px-4  bg-darkSemiBlue hover:bg-lightSemiBlue rounded text-white font-bold"
        >
          Search
        </button> */}
      </form>
    </div>
  );
};

export default Search;
