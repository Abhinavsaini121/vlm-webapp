import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from '../pages/Auth/Onboarding';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Livebattle from '../pages/Livebattle/Livebattle';
import Joinbattle from '../pages/Livebattle/Joinbattle';
import Liveclass from '../pages/Liveclass/Liveclass';
import Profile from '../pages/Profile/Profile';
import TeacherHome from '../pages/Home/Teacher/Home/TeacherHome';
import ProfileHome from '../pages/Home/Teacher/profile/Profile';
import WalletHome from '../pages/Home/Teacher/wallet/WalletHome';
import ShortsPage from '../pages/Home/Teacher/Shorts/Shorts';
import FeedbackReviews from '../pages/Home/Teacher/reviews/Reviews';
import Maintenance from '../pages/Maintenance';
import ScheduleForm from '../pages/Home/Teacher/Home/class/ScheduleClass';
import StudentDashboard from '../pages/Auth/Home/Home';
import LiveClassRoom from '../pages/Home/Teacher/Home/Live/LiveClassRoom';



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
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/Livebattle" element={<Livebattle />} />
      <Route path="/Joinbattle" element={<Joinbattle />} />
      <Route path="/Liveclass" element={<Liveclass />} />
      <Route path="/StudentProfile" element={<Profile />} />

      <Route path="/teacher-dashboard" element={<TeacherHome />} />
      <Route path="/scheduleclaas" element={<ScheduleForm />} />
      <Route path="/live" element={<LiveClassRoom />} />
      <Route path="/TeacherProfile" element={<ProfileHome />} />
      <Route path="/earnings" element={<WalletHome />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/reviews" element={<FeedbackReviews />} />
      

      <Route path="*" element={<Maintenance />} />
    </Routes>
  );
};

export default AppRoutes;