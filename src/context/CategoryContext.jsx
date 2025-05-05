import React, { createContext, useState, useContext } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("All Courses");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  return (
    <CategoryContext.Provider
      value={{ category, setCategory, selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
