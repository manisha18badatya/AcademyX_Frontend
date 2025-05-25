import React from "react";

import UpdateCourse from "./UpdateCourse";
import { FormProvider } from "../../context/FormContext";

function CourseModify() {
  return (
    <FormProvider>
      <UpdateCourse />
    </FormProvider>
  );
}

export default CourseModify;
