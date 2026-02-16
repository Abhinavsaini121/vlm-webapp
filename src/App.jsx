import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen/SplashScreen';
import AppRoutes from './routes/AppRoutes'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[#0f0f10] min-h-screen">
      <AppRoutes />
    </div>
  );
}
;

export default App;