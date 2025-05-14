import React, { createContext, useState, useContext } from "react";

const OptionContext = createContext();

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState("My Profile");
  const [selectedOption, setSelectedOption] = useState("My Profile");

  return (
    <OptionContext.Provider
      value={{ option, setOption, selectedOption, setSelectedOption }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export const useOptions = () => useContext(OptionContext);
