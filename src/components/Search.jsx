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
      <form className="p-2 bg-white rounded flex items-center">
        {/* search icon */}
        <IoSearchOutline className="text-darkSemiBlue text-lg" />

        {/* search input */}
        <input
          type="text"
          className="mr-2 p-2 rounded border-none w-72 min-w-100% focus:outline-none"
          placeholder="Search a student..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* search btn */}
        <button
          type="submit"
          className="py-2 px-4  bg-darkSemiBlue hover:bg-lightSemiBlue rounded text-white font-bold"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
