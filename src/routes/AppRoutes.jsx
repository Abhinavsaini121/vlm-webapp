import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from '../pages/Auth/Onboarding';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import UploadDocs from '../pages/Auth/UploadDocs';
import Interview from '../pages/Auth/Interview';

import Liveclass from '../pages/Liveclass/Liveclass';
import Livebattle from '../pages/Livebattle/Livebattle';
import Joinbattle from '../pages/Livebattle/Joinbattle';
import Maintenance from '../pages/Maintenance';
import StudentDashboard from '../pages/Auth/Home/Home';
import LiveClassRoom from '../pages/Home/Teacher/Home/Live/LiveClassRoom';
import Coursedetails  from '../pages/Auth/Home/Coursedetails';
import Transactions from '../pages/Auth/Transactions/Transactions';
import Popularcourse from '../pages/Popularcourse/Popularcourse';
import Curriculum from '../pages/Curriculum/Curriculum';
import Coursereview from '../pages/Coursereview/Coursereview';
import Writereview from '../pages/Writereview/Writereview';

import ShortsPage from '../pages/Home/Teacher/Shorts/Shorts';

import TeacherHome from '../pages/Home/Teacher/Home/TeacherHome';
import Notifications from '../pages/Home/Teacher/Home/notifications/Notifications';
import EditProfile from '../pages/Home/Teacher/profile/EditProfile';
import YourVideos from '../pages/Home/Teacher/YourVideos/YourVideos';
import Profile from '../pages/Profile/Profile';
import ProfileHome from '../pages/Home/Teacher/profile/Profile';
import FeedbackReviews from '../pages/Home/Teacher/reviews/Reviews';
import ScheduleForm from '../pages/Home/Teacher/Home/class/ScheduleClass';
import WalletHome from '../pages/Home/Teacher/wallet/WalletHome';
import HelpSupport from '../pages/Home/Teacher/profile/HelpSupport';
import TeacherSettings from '../pages/Home/Teacher/profile/TeacherSettings';

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
      <Route path="/upload-docs" element={<UploadDocs />} />
      <Route path="/interview" element={<Interview />} />

      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/Popularcourse" element={<Popularcourse />} />
      <Route path="/Coursedetails" element={<Coursedetails />} />
      <Route path="/Curriculum" element={<Curriculum/>} />
      <Route path="/Coursereview" element={<Coursereview/>} />
      <Route path="/Writereview" element={<Writereview/>} />
      <Route path="/Livebattle" element={<Livebattle />} />
      <Route path="/Joinbattle" element={<Joinbattle />} />
      <Route path="/Liveclass" element={<Liveclass />} />
      <Route path="/StudentProfile" element={<Profile />} />
      <Route path="/Transactions" element={<Transactions />} />


      <Route path="/teacher-dashboard" element={<TeacherHome />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/scheduleclaas" element={<ScheduleForm />} />
      <Route path="/live" element={<LiveClassRoom />} />
      <Route path="/TeacherProfile" element={<ProfileHome />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/support" element={<HelpSupport />} />
      <Route path="/setting" element={<TeacherSettings />} />
      <Route path="/earnings" element={<WalletHome />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/reviews" element={<FeedbackReviews />} />
      <Route path="/your-videos" element={<YourVideos />} />

      <Route path="*" element={<Maintenance />} />
    </Routes>
  );
};

export default AppRoutes;