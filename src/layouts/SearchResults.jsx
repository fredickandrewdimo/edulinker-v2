import ViewOption from "../components/ViewOption";

const SearchResults = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between pt-8 pb-8">
        {/* Searched word results */}
        <div className="">
          {/* <p>
            <span className="font-bold">Results for: </span>John Doe
          </p> */}
        </div>
        {/* View Option Toggle */}
        <ViewOption />
      </div>
    </div>
  );
};

export default SearchResults;
