import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Add from "../components/Add";

const OptionBar = () => {
  return (
    <div className="w-11/12 mx-auto pt-16 pb-5 flex align-items justify-between">
      <Search />
      <div className="flex items-center justify-between">
        <Filter />
        <Add />
      </div>
    </div>
  );
};

export default OptionBar;
