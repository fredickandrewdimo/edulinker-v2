import { useState } from "react";

const useToggle = (initialVal = false) => {
  const [isOpen, setIsOpen] = useState(initialVal);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, toggle];
};

export default useToggle;
