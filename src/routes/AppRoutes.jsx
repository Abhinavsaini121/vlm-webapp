import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from '../pages/Auth/Onboarding';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Home from '../pages/Auth/Home/Home';
import Livebattle from '../pages/Livebattle/Livebattle';
import Joinbattle from '../pages/Livebattle/Joinbattle';
import Liveclass from '../pages/Liveclass/Liveclass';
import Profile from '../pages/Profile/Profile';


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
      <Route path="/Home" element={<Home />} />
      <Route path="/Livebattle" element={<Livebattle />} />
      <Route path="/Joinbattle" element={<Joinbattle />} />
      <Route path="/Liveclass" element={<Liveclass />} />
      <Route path="/Profile" element={<Profile />} />
    
    </Routes>
  );
};

export default AppRoutes;