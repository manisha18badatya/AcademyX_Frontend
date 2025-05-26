import React from "react";

import UpdateCourse from "./UpdateCourse";
import { FormProvider } from "../../context/FormContext";
import Navbar from "../navbar";
import Footer from "../footer";

function CourseModify() {
  return (
    <div>
      <Navbar />
      <FormProvider>
        <UpdateCourse />
      </FormProvider>
      <Footer />
    </div>
  );
}

export default CourseModify;
