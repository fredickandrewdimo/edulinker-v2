import React, { useState } from "react";
import { useToggle } from "../hooks/useToggle";

// React icons
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";

const ViewOption = () => {
  const [isViewOpen, toggle] = useToggle();

  const views = ["Card", "List"];

  return (
    <div className="flex items-center">
      <p>Viewing Options</p>

      {/* View toggle container */}
      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggle}
          className="flex items-center py-2 px-8 bg-white rounded ml-2 hover:bg-gray-200 active:bg-gray-200 active:text-blue-500 active:border-2 active:bg-white active:border-blue-500 border-2 border-gray-100"
        >
          Auto
          {isViewOpen ? (
            <RiArrowUpSLine className="text-2xl" />
          ) : (
            <RiArrowDropDownLine className="text-2xl" />
          )}
        </button>

        {/* Toggle Content */}
        {isViewOpen && (
          <div className="absolute bg-white top-12 p-2 rounded flex flex-col items-start">
            {views.map((view, index) => (
              <div
                key={index}
                className="px-9 py-1 w-full flex items-start hover:bg-blue-400 hover:text-white rounded hover:cursor-pointer"
              >
                <p className="text-sm">{view}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewOption;
