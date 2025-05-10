import React, { createContext, useContext, useState } from "react";

// Creating context for global form data
const FormContext = createContext();

export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  // Global form data for course and lessons
  const [courseData, setCourseData] = useState({
    courseName: "",
    title: "",
    description: "",
    price: "",
    duration: "",
    category: "",
    thumbnail: null,
    content: [], // Array of lessons
  });

  return (
    <FormContext.Provider value={{ courseData, setCourseData }}>
      {children}
    </FormContext.Provider>
  );
};
