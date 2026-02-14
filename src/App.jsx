import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen/SplashScreen';
import AppRoutes from './routes/AppRoutes'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0f0f10] min-h-screen">
      {loading ? (
        <SplashScreen />
      ) : (
        <AppRoutes />
      )}
    </div>
  );
}

export default App;