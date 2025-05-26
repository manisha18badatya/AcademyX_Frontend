// routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CoursePage from "./pages/CoursePage";
import Courses from "./pages/Courses";
import React from "react";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/Signup";
import Community from "./pages/Community";
import BuyPage from "./pages/BuyPage";
import YourCourses from "./components/User/YourCourses";
import Dashboard from "./components/User/Dashboard";
import CreateCoursePage from "./components/CourseCreation/CreateCourse";
import CreateLesson from "./components/CourseCreation/CreateLesson";
import UpdateLesson from "./components/CourseCreation/UpdateLesson";
import EnrolledCourses from "./components/User/EnrolledCourses";
import CourseModify from "./components/CourseCreation/CourseModify";

import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/coursepage/:id" element={<CoursePage />} />
    <Route path="/community" element={<Community />} />
    <Route path="/buypage" element={<BuyPage />} />

    {/* Protected Routes */}
    <Route
      path="/user"
      element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/mylibrary"
      element={
        <ProtectedRoute>
          <EnrolledCourses />
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/updatecourse/:id"
      element={
        <ProtectedRoute>
          <CourseModify />
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/updatecourse/:id/createlesson"
      element={
        <ProtectedRoute>
          <CreateLesson />
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/updatecourse/:courseId/:lessonId/updatelesson"
      element={
        <ProtectedRoute>
          <UpdateLesson />
        </ProtectedRoute>
      }
    />
    <Route
      path="/createcourse"
      element={
        <ProtectedRoute>
          <CreateCoursePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/yourcourses"
      element={
        <ProtectedRoute>
          <YourCourses />
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
