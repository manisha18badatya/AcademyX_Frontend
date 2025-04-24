// routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginTest from './pages/LoginTest';
import Courses from './pages/CoursePage';
import React from 'react';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginTest />} />
    <Route path="/courses" element={<Courses />} />
  </Routes>
);

export default AppRoutes;
