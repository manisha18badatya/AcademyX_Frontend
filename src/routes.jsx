// routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CoursePage from './pages/CoursePage';
import Courses from './pages/Courses';
import React from 'react';
import UserProfile from './pages/UserProfile';
import CreateCoursePage from './pages/CreateCourse';
import SignUp from './pages/Signup';

const AppRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/coursepage" element={<CoursePage/>} />
    <Route path="/profile" element={<UserProfile/>} />
    <Route path="/createcourse" element={<CreateCoursePage/>} />
  </Routes>
);

export default AppRoutes;
