import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from '../components/SplashScreen/SplashScreen'; // Path check kar lein
import Onboarding from '../pages/Auth/Onboarding';
import Login from '../pages/Auth/Login';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Sabse pehle SplashScreen dikhega */}
      <Route path="/" element={<SplashScreen />} />
      
      {/* 3 second baad is route par automatic navigate ho jayega */}
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;