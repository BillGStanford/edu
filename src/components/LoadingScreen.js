import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  
  useEffect(() => {
    // Check if we've shown the loading screen today
    const lastLoadingDate = localStorage.getItem('eduStaticLastLoading');
    const today = new Date().toDateString();
    
    if (lastLoadingDate !== today) {
      setShowLoading(true);
      
      // Store today's date
      localStorage.setItem('eduStaticLastLoading', today);
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete();
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 400);
      
      return () => clearInterval(interval);
    } else {
      // Skip loading if already shown today
      onComplete();
    }
  }, [onComplete]);
  
  if (!showLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-primary-600 to-secondary-900 flex flex-col justify-center items-center z-50">
      <div className="w-64 h-64 relative mb-8">
        {/* Animated icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FaGraduationCap 
            className={`text-white text-5xl absolute transition-all duration-700 ${
              progress > 20 ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
            }`} 
          />
          <FaLightbulb 
            className={`text-white text-5xl absolute transition-all duration-700 ${
              progress > 20 && progress <= 50 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`} 
          />
          <FaUsers 
            className={`text-white text-5xl absolute transition-all duration-700 ${
              progress > 50 && progress <= 80 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`} 
          />
          <FaRocket 
            className={`text-white text-5xl absolute transition-all duration-700 ${
              progress > 80 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`} 
          />
        </div>
      </div>
      
      <h1 className="text-4xl font-display font-bold mb-4 text-white">EduStatic</h1>
      <p className="text-xl mb-8 text-white text-center px-6">
        Transforming Education for the Digital Age
      </p>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-white mt-4 text-sm">
        {progress < 100 ? 'Loading your learning journey...' : 'Ready to learn!'}
      </p>
    </div>
  );
};

export default LoadingScreen;