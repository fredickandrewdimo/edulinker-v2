import React, { useState, createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  // global variable for students
  const [students, setStudents] = useState([]);

  // global variable for search query
  const [query, setQuery] = useState("");

  return (
    <MyContext.Provider value={{ students, setStudents, query, setQuery }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
