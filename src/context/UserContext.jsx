import React, { createContext, useState, useContext } from "react";

const OptionContext = createContext();

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <OptionContext.Provider
      value={{ option, setOption, selectedOption, setSelectedOption }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export const useOptions = () => useContext(OptionContext);
