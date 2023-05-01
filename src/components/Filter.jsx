import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";
import { year, courses, schools } from "../data/filter";

const Filter = () => {
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isSchoolOpen, setIsSchoolOpen] = useState(false);

  return (
    <div className="flex align items-center justify-between mx-5">
      <h1 className="mr-2">Filter by</h1>

      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={() => setIsYearOpen(!isYearOpen)}
          className={`flex items-center py-2 px-6 bg-white rounded mx-2 hover:bg-gray-200 active:bg-gray-200 active:text-blue-500 active:border-2 active:bg-white active:border-blue-500 border-2 border-gray-100 ${
            isYearOpen ? "border-2 bg-white border-blue-500 text-blue-500" : ""
          }`}
        >
          <p className="mr-2">Year Level</p>
          {isYearOpen ? (
            <RiArrowUpSLine className="text-2xl" />
          ) : (
            <RiArrowDropDownLine className="text-2xl" />
          )}
        </button>

        {isYearOpen && (
          <div className="absolute bg-white top-14 p-2 rounded flex flex-col items-start">
            {year.map((level, index) => (
              <div
                key={index}
                className="px-9 py-1 w-full flex items-start hover:bg-blue-400 hover:text-white rounded hover:cursor-pointer"
              >
                <p className="text-sm">{level}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={() => setIsCourseOpen(!isCourseOpen)}
          className={`flex items-center py-2 px-6 bg-white rounded mx-2 hover:bg-gray-200 active:bg-gray-200 active:text-blue-500 active:border-2 active:bg-white active:border-blue-500 border-2 border-gray-100 ${
            isCourseOpen
              ? "border-2 bg-white border-blue-500 text-blue-500"
              : ""
          }`}
        >
          <p className="mr-2">Course</p>
          {isCourseOpen ? (
            <RiArrowUpSLine className="text-2xl" />
          ) : (
            <RiArrowDropDownLine className="text-2xl" />
          )}
        </button>

        {isCourseOpen && (
          <div className="absolute bg-white top-14 p-2 rounded flex flex-col items-start">
            {courses.map((course, index) => (
              <div
                key={index}
                className="px-8 py-1 w-64 flex items-start hover:bg-blue-400 hover:text-white rounded hover:cursor-pointer"
              >
                <p className="text-sm w-fit">{course}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={() => setIsSchoolOpen(!isSchoolOpen)}
          className={`flex items-center py-2 px-6 bg-white rounded mx-2 hover:bg-gray-200 active:bg-gray-200 active:text-blue-500 active:border-2 active:bg-white active:border-blue-500 border-2 border-gray-100 ${
            isSchoolOpen
              ? "border-2 bg-white border-blue-500 text-blue-500"
              : ""
          }`}
        >
          School
          {isSchoolOpen ? (
            <RiArrowUpSLine className="text-2xl" />
          ) : (
            <RiArrowDropDownLine className="text-2xl" />
          )}
        </button>

        {isSchoolOpen && (
          <div className="absolute bg-white top-14 p-2 rounded flex flex-col items-start z-10">
            {schools.map((school, index) => (
              <div
                key={index}
                className="px-8 py-1 w-72 flex items-start hover:bg-blue-400 hover:text-white rounded hover:cursor-pointer"
              >
                <p className="text-sm">{school}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
