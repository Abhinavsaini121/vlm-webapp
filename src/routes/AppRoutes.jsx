import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from '../pages/Auth/Onboarding';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
<<<<<<< HEAD
import Home from '../pages/Auth/Home/Home';
import Livebattle from '../pages/Livebattle/Livebattle';
import Joinbattle from '../pages/Livebattle/Joinbattle';
import Liveclass from '../pages/Liveclass/Liveclass';
import Profile from '../pages/Profile/Profile';
=======
import TeacherHome from '../pages/Home/Teacher/Home/TeacherHome';
import ProfileHome from '../pages/Home/Teacher/profile/Profile';
import WalletHome from '../pages/Home/Teacher/wallet/WalletHome';
import ShortsPage from '../pages/Home/Teacher/Shorts/Shorts';
import FeedbackReviews from '../pages/Home/Teacher/reviews/Reviews';
import Maintenance from '../pages/Maintenance';
>>>>>>> 54b6ae9a0bf1659a35142cf274175991f9684237


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
<<<<<<< HEAD
      <Route path="/Home" element={<Home />} />
      <Route path="/Livebattle" element={<Livebattle />} />
      <Route path="/Joinbattle" element={<Joinbattle />} />
      <Route path="/Liveclass" element={<Liveclass />} />
      <Route path="/Profile" element={<Profile />} />
    
=======
      <Route path="/teacher-dashboard" element={<TeacherHome />} />
      <Route path="/profile" element={<ProfileHome />} />
      <Route path="/earnings" element={<WalletHome />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/reviews" element={<FeedbackReviews />} />

      <Route path="*" element={<Maintenance />} />
>>>>>>> 54b6ae9a0bf1659a35142cf274175991f9684237
    </Routes>
  );
};

export default AppRoutes;