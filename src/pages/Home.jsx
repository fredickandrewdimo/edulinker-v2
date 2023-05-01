import React from "react";
import DisplayResults from "../layouts/DisplayResults";
import SearchResults from "../layouts/SearchResults";

const Home = () => {
  return (
    <div className="font-sans w-11/12 mx-auto py-5">
      <SearchResults />
      <DisplayResults />
    </div>
  );
};

export default Home;
