// routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CoursePage from "./pages/CoursePage";
import Courses from "./pages/Courses";
import React from "react";
import UserProfile from "./pages/UserProfile";
import CreateCoursePage from "./pages/CreateCourse";
import SignUp from "./pages/Signup";
import MyLibrary from "./pages/MyLibrary";
import Community from "./pages/Community";
import BuyPage from "./pages/BuyPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/coursepage/:id" element={<CoursePage />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/mylibrary" element={<MyLibrary />} />
    <Route path="/community" element={<Community />} />
    <Route path="/createcourse" element={<CreateCoursePage />} />
    <Route path="/buypage" element={<BuyPage />} />
  </Routes>
);

export default AppRoutes;
