import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from '../pages/Auth/Onboarding';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import TeacherHome from '../pages/Home/Teacher/Home/TeacherHome';
import ProfileHome from '../pages/Home/Teacher/profile/Profile';
import WalletHome from '../pages/Home/Teacher/wallet/WalletHome';
import ShortsPage from '../pages/Home/Teacher/Shorts/Shorts';
import FeedbackReviews from '../pages/Home/Teacher/reviews/Reviews';

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
      <Route path="/earnings" element={<WalletHome />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/reviews" element={<FeedbackReviews />} />
    </Routes>
  );
};

export default AppRoutes;