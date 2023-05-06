import ViewOption from "../components/ViewOption";

const SearchResults = () => {
  return (
    <div className="pb-4">
      <div className="flex items-center justify-between pt-8 pb-8">
        <div className="">
          <p>
            <span className="font-bold">Results for: </span>John Doe
          </p>
        </div>
        <ViewOption />
      </div>
    </div>
  );
};

export default SearchResults;
