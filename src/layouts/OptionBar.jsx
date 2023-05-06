import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Add from "../components/Add";

const OptionBar = () => {
  return (
    <div className="pt-16 pb-5 flex items-center justify-between">
      <Search />
      <div className="flex items-center justify-between">
        <Filter />
        <Add />
      </div>
    </div>
  );
};

export default OptionBar;
