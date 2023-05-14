import React, { useState } from "react";

// React Icons
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";

// Data for filters
import { year, courses, schools } from "../data/filter";
import { useToggle } from "../hooks/useToggle";

const Filter = () => {
  // hook for year toggle
  const [isYearOpen, toggleYear] = useToggle();

  // hook for course toggle
  const [isCourseOpen, toggleCourse] = useToggle();

  // hook for school toggle
  const [isSchoolOpen, toggleSchool] = useToggle();

  return (
    // filter main container
    <div className="flex align items-center justify-between mx-5">
      <h1 className="mr-2">Filter by</h1>

      {/* Container for year filter */}
      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggleYear}
          className={`flex items-center py-2 px-6 rounded mx-2 hover:bg-white hover:text-textSecondaryLightColor  bg-white active:white active:text-textPrimaryLightColor active:border-2 active:bg-white active:border-textPrimaryLightColor border-2 border-white${
            isYearOpen
              ? "border-2 bg-white border-textPrimaryLightColor text-textPrimaryLightColor"
              : ""
          }`}
        >
          <p className="mr-2">Year Level</p>
          {isYearOpen ? (
            <RiArrowUpSLine className="text-2xl" />
          ) : (
            <RiArrowDropDownLine className="text-2xl" />
          )}
        </button>

        {/* toggle content */}
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

      {/* Container for course filter */}
      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggleCourse}
          className={`flex items-center py-2 px-6 rounded mx-2 hover:bg-white hover:text-textSecondaryLightColor  bg-white active:white active:text-textPrimaryLightColor active:border-2 active:bg-white active:border-textPrimaryLightColor border-2 border-white${
            isCourseOpen
              ? "border-2 bg-white border-textPrimaryLightColor text-textPrimaryLightColor"
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

        {/* toggle content */}
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

      {/* Container for school filter */}
      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggleSchool}
          className={`flex items-center py-2 px-6 rounded mx-2 hover:bg-white hover:text-textSecondaryLightColor  bg-white active:white active:text-textPrimaryLightColor active:border-2 active:bg-white active:border-textPrimaryLightColor border-2 border-white${
            isSchoolOpen
              ? "border-2 bg-white border-textPrimaryLightColor text-textPrimaryLightColor"
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

        {/* toggle content */}
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
