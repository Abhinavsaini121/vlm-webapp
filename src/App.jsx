import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SplashScreen from './components/SplashScreen/SplashScreen';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(location.pathname === '/');

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowSplash(false);
      return;
    }

    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-[#0f0f10] min-h-screen">
      <ThemeProvider>
        {showSplash ? <SplashScreen /> : <AppRoutes />}
      </ThemeProvider>
    </div>
  );
}
;

export default App;