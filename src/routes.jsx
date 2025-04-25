// routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginTest from './pages/LoginTest';
import Courses from './pages/CoursePage';
import React from 'react';
import CoursePage from './pages/CoursePage';
import CourseCategoryPage from './pages/CourseCategory';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginTest />} />
    <Route path="/courses/:id" element={<Courses />} />
    <Route path="/courseCategory" element={<CourseCategoryPage/>} />
    
  </Routes>
);

export default AppRoutes;
