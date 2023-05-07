import { Link } from "react-router-dom";

// import PageNotFound from "/src/assets/PageNotFound.svg";

const NotFound = () => {
  return (
    // Main container
    <div className="not-found home w-9/12 mx-auto min-h-screen mt-20">
      {/* Content Container */}
      <div className="content flex items-center text-center py-24 justify-center">
        {/* Copy container */}
        <div className="text-left">
          <h1 className="font-bold mb-3 text-7xl text-black">Page Not Found</h1>
          <p className="text-gray-500 mb-10 text-xl">
            This page doesn't exist or was removed! <br /> We suggest your back
            to home.
          </p>
          <Link
            to="/"
            className="lg:py-4 lg:px-6 py-3 px-6 rounded-full bg-darkSemiBlue font-bold text-white hover:bg-darkGreen w-fit text-xl"
          >
            Back to Home
          </Link>
        </div>
        {/* Image container */}
        <div className="w-8/12 md:6/12 mx-auto mb-8">
          {/* <img className="" src={PageNotFound} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
