import React from "react";

// Components
import DisplayResults from "../layouts/DisplayResults";
import SearchResults from "../layouts/SearchResults";
import OptionBar from "../layouts/OptionBar";

const Home = () => {
  return (
    <div className="font-sans w-11/12 mx-auto">
      <OptionBar />
      <SearchResults />
      <DisplayResults />
    </div>
  );
};

export default Home;
