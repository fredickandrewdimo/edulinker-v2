// react icons
import { FaSchool } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Card = () => {
  const [students, error, isLoading] = useFetch(
    "http://localhost:3010/students"
  );

  return (
    // Display error message

    // Prepare for a loading message

    // Card containers
    <div className="grid gap-4 grid-cols-4">
      {/* Map a template */}
      {students &&
        students.map((student) => (
          // Card Container
          <Link to="/preview" key={student.id}>
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
                  <span className="font-bold">Year-Level: </span> {student.year}
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
