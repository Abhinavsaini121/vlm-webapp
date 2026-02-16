import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from '../pages/Auth/Onboarding';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import TeacherHome from '../pages/Home/Teacher/TeacherHome';
import ProfileHome from '../pages/Home/Teacher/profile/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 
         Since App.js handles the delay, 
         "/" should now load Onboarding directly 
      */}
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/teacher-dashboard" element={<TeacherHome />} />
      <Route path="/profile" element={<ProfileHome />} />
    </Routes>
  );
};

export default AppRoutes;