import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";

// react icons
import { FaSchool } from "react-icons/fa";

const Preview = () => {
  const { id } = useParams(); // get ID from URL
  const [student, isLoading, error] = useFetch(
    `http://localhost:3010/students/${id}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="font-sans w-11/12 mx-auto min-h-screen mt-16">
      <div className="mb-9">
        <Link
          to="/"
          className="text-xl py-2 px-6 border-2 border-lightSemiBlue rounded text-darkSemiBlue font-bold mr-5"
        >
          Back
        </Link>
      </div>

      {student && (
        <div className="flex bg-lightWhite items-center justify-center p-20 rounded-md">
          <div className="bg-darkWhite mr-9 p-5 w-96 h-72 flex items-center justify-center">
            <FaSchool className="text-9xl text-gray-500" />
          </div>
          <div className="">
            <div className="mb-9 text-2xl">
              <p className="mb-2">
                Name: <span className="font-bold">{student.name}</span>
              </p>
              <p className="mb-2">
                Birthday: <span className="font-bold">{student.birthday}</span>
              </p>
              <p className="mb-2">
                Course: <span className="font-bold">{student.course}</span>
              </p>
              <p className="mb-2">
                School: <span className="font-bold">{student.school}</span>
              </p>
              <p className="mb-2">
                Status: <span className="font-bold">{student.status}</span>
              </p>
            </div>

            <div className="btn-container">
              <button className="py-2 px-6 bg-lightSemiBlue rounded text-white font-bold hover:bg-darkSemiBlue mr-5">
                Edit
              </button>
              <button className="py-2 px-4 bg-lightSemiBlue rounded text-white font-bold hover:bg-darkSemiBlue">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
