// react icons
import { FaSchool } from "react-icons/fa";

// Hooks
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";

// Components
import Error from "./Error";
import Loading from "./Loading";

const Card = () => {
  // Use Context
  const { students, setStudents, query } = useContext(MyContext);

  // Custom Fetch
  const [data, error, isLoading] = useFetch("http://localhost:3010/students");

  useEffect(() => {
    // Check if the data has been fetched successfully
    if (data !== undefined) {
      setStudents(data);
    }
  }, [data, setStudents]);

  return (
    // Card containers
    <div className="grid gap-4 grid-cols-4">
      {/* Error State */}
      {error && <Error />}

      {/* Loading State */}
      {isLoading && <Loading />}

      {/* Map a template */}
      {students &&
        students
          .filter((student) => student.name.toLowerCase().includes(query))
          .map((student) => (
            // Card Container
            <Link to={`/students/${student.id}`} key={student.id}>
              <div className="hover:border-blue-500 border-2 border-white p-4 rounded hover:cursor-pointer text-sm bg-white">
                <div className="w-full flex items-center justify-center mb-3 bg-gray-200 p-4 rounded">
                  <FaSchool className="text-9xl text-gray-500" />
                </div>
                <div className="my-2">
                  <p>
                    <span className="font-bold">Name: </span> {student.name}
                  </p>
                  <p>
                    <span className="font-bold">Birthday: </span>{" "}
                    {student.birthday}
                  </p>
                </div>
                <div className="my-2">
                  <p>
                    <span className="font-bold">Course: </span> {student.course}
                  </p>
                  <p>
                    <span className="font-bold">Year-Level: </span>{" "}
                    {student.year}
                  </p>
                  <p>
                    <span className="font-bold">School: </span> {student.school}
                  </p>
                </div>
                <div className="my-2">
                  <p>
                    <span className="font-bold">Status: </span> {student.status}
                  </p>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Card;
