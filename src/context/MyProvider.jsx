import React, { useState, createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
